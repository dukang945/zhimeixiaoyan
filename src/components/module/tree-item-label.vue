<template>
	<div :class="tdClass">
		<span class="before-line" v-if="root !== 0 && nodes !== 1" :style="{'left':model.bLeft + 'px'}"></span>
		<table>
			<tr>
				<td :colspan="colSpan">
					<table>
						<tr class="leve" :class="levelClass">
							<td class="td1">
								{{model.id}}
							</td>
							<td class="td2">
								<div class="td-title" @dblclick="handlerExpand(model)"  @click="clickRow(model)">
									<span v-if="model.children.length > 0" class="tree-close" :class="{'tree-open':model.isExpand}" @click="handlerExpand(model)"></span>
									<a class="ellipsis">
										<i class="el-icon-message icon"></i>
										<span :title="model.name">{{model.name}}</span>
									</a>
								</div>
							</td>
							<td class="td3">{{model.enname}}</td>
							<td class="td4">{{model.type}}</td>
							<td class="td5">{{model.sta}}</td>
							<td class="td6">{{model.labelIsShow}}</td>
							<td class="td7">
								<a class="reset" href="javascript:;" @click="actionFunc(model)">编辑</a>
								<i class="line"></i>
								<a class="delete" href="javascript:;" @click="deleteFunc(model)">删除</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<div v-show="model.isExpand" class="other-node" :class="otherNodeClass">
			<tree-item v-for="(m, i) in model.children" :key="String('child_node'+i)" :num='i' :root="1" @actionFunc="actionFunc"
			 @deleteFunc="deleteFunc" @handlerExpand="handlerExpand" @clickRow="clickRow" :nodes.sync='model.children.length' :trees.sync='trees'
			 :model.sync="m">
			</tree-item>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'treeItem',
		props: ['model', 'num', 'nodes', 'root', 'trees'],
		data() {
			return {
				parentNodeModel: null
			}
		},
		computed: {
			colSpan() {
				return this.root === 0 ? '' : 6
			},
			tdClass() {
				return this.root === 0 ? 'td-border' : 'not-border'
			},
			levelClass() {
				return this.model ? 'leve-' + this.model.level : ''
			},
			childNodeClass() {
				return this.root === 0 ? '' : 'child-node'
			},
			otherNodeClass() {
				return this.model ? 'other-node-' + this.model.level : ''
			}
		},
		methods: {
			getParentNode(m) {
				// 查找点击的子节点
				var recurFunc = (data, list) => {
					data.forEach((l) => {
						if (l.id === m.id) this.parentNodeModel = list
						if (l.children) {
							recurFunc(l.children, l)
						}
					})
				}
				recurFunc(this.trees, this.trees)
			},
			handlerExpand(m) {
				this.$emit('handlerExpand', m)
			},
			deleteFunc(m) {
				this.$emit('deleteFunc', m)
			},
			actionFunc(m) {
				this.$emit('actionFunc', m)
			},
			clickRow(m){
				this.$emit('clickRow', m)
			}
		},
		filters: {
			formatDate: function(date) {
				// 后期自己格式化
				return date //Utility.formatDate(date, 'yyyy/MM/dd')
			}
		}
	}
</script>
