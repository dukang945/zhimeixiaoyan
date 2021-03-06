import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/page/Welcome'
import Login from '@/components/page/login'
import SkillColumn from '@/components/page/SkillColumn'
import SkillDetail from '@/components/page/SkillDetail'
import About from '@/components/page/About'
import Act from '@/components/page/Act'
import ActDetail from '@/components/page/ActDetail'
import Advice from '@/components/page/Advice'
import Aim from '@/components/page/Aim'
import Branch from '@/components/page/Branch'
import Brand from '@/components/page/Brand'
import Classify from '@/components/page/Classify'
import Color from '@/components/page/Color'
import Constellation from '@/components/page/Constellation'
import ConstellationDetail from '@/components/page/ConstellationDetail'
import Log from '@/components/page/Log'
import Evaluation from '@/components/page/Evaluation'
import Face from '@/components/page/Face'
import Feedback from '@/components/page/Feedback'
import Icon from '@/components/page/Icon'
import Ingredient from '@/components/page/Ingredient'
import Issue from '@/components/page/Issue'
import Keyword from '@/components/page/Keyword'
import Main from '@/components/page/Main'
import Makeup from '@/components/page/Makeup'
import Marking from '@/components/page/Marking'
import MarkingDetail from '@/components/page/MarkingDetail'
import Member from '@/components/page/Member'
import Menu from '@/components/page/Menu'
import Module from '@/components/page/Module'
import Part from '@/components/page/Part'
import Product from '@/components/page/Product'
import Rotation from '@/components/page/Rotation'
import Search from '@/components/page/Search'
import Strategy from '@/components/page/Strategy'
import Tag from '@/components/page/Tag'
import Teach from '@/components/page/Teach'
import Temperament from '@/components/page/Temperament'
import User from '@/components/page/User'
import VipMsg from '@/components/page/VipMsg'
import Beautyknowledge from '@/components/page/Beautyknowledge'
import Hotsearch from '@/components/page/Hotsearch'
import LabelCountAll from '@/components/page/LabelCountAll'
import Registered from '@/components/page/Registered'
import BeautyMakeupDataAll from '@/components/page/BeautyMakeupDataAll'
import UserInterested from '@/components/page/UserInterested'
import Workspace from '@/components/page/Workspace'
import Eye from '@/components/page/Eye'
import Nose from '@/components/page/Nose'
import Lip from '@/components/page/Lip'
import Hair from '@/components/page/Hair'
import Brow from '@/components/page/Brow'
import Foundation from '@/components/page/Foundation'
import Praise from '@/components/page/Praise'
import Star from '@/components/page/Star'
import HusbandStar from '@/components/page/HusbandStar'
import SimilarCelebrity from '@/components/page/SimilarCelebrity'
import Emotion from '@/components/page/Emotion'
import Answer from '@/components/page/Answer'
import ShareDescribe from '@/components/page/ShareDescribe'
import InterestedTest from '@/components/page/InterestedTest'
import CategoryProblem from '@/components/page/CategoryProblem'
import KnowledgeMes from '@/components/page/KnowledgeMes'
import NewProduct from '@/components/page/NewProduct'
import NewIngredient from '@/components/page/NewIngredient'
import QuickWork from '@/components/page/QuickWork'
import Comment from '@/components/page/Comment'
import Bloggers from '@/components/page/Bloggers'
import NewMakeup from '@/components/page/NewMakeup'
import Category from '@/components/page/Category'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Welcome',
      component: Welcome,
      name:'首页',
			redirect:'quickWork',
      children: [{
          path: '/skillColumn',
					name:'技能栏目管理',
          component: SkillColumn
        },
        {
          path: '/skillDetail',
					name:'技能详情管理',
          component: SkillDetail
        },
        {
          path: '/about',
					name:'关于我们',
          component: About
        },
        {
          path: '/act',
					name:'节目管理',
          component: Act
        },
        {
          path: '/actDetail',
					name:'节目详情管理',
          component: ActDetail
        },
        {
          path: '/advice',
					name:'天气建议',
          component: Advice
        },
        {
          path: '/aim',
					name:'化妆目的管理',
          component: Aim
        },
        {
          path: '/branch',
					name:'步骤子类管理',
          component: Branch,
        },
        {
          path: '/brand',
					name:'品牌',
          component: Brand,
        },
        {
          path: '/classify',
					name:'美妆测评分类',
          component: Classify
        },
        {
          path: '/color',
					name:'色号',
          component: Color
        },
        {
          path: '/constellation',
					name:'星座信息',
          component: Constellation
        },
        {
          path: '/constellationDetail',
					name:'星座运势',
          component: ConstellationDetail
        },
        {
          path: '/log',
					name:'登录日志',
          component: Log
        },
        {
          path: '/evaluation',
					name:'美妆评测',
          component: Evaluation
        },
        {
          path: '/eye',
					name:'眼部',
          component: Eye
        },
        {
          path: '/face',
					name:'脸部',
          component: Face
        },
        {
          path: '/lip',
					name:'唇部',
          component: Lip
        },
        {
          path: '/nose',
					name:'鼻部',
          component: Nose
        },
        {
          path: '/brow',
					name:'眉形',
          component: Brow
        },
        {
          path: '/foundation',
					name:'底妆遮瑕',
          component: Foundation
        },
        {
          path: '/hair',
					name:'发型',
          component: Hair
        },
        {
          path: '/praise',
					name:'夸赞文案',
          component: Praise
        },
        {
          path: '/star',
					name:'明星相似度',
          component: Star
        },
        {
          path: '/husbandStar',
					name:'明星夫妻相',
          component: HusbandStar
        },
        {
          path: '/similarCelebrity',
					name:'相似名人',
          component: SimilarCelebrity
        },
        {
          path: '/emotion',
					name:'情绪检测',
          component: Emotion
        },
        {
          path: '/feedback',
					name:'用户反馈',
          component: Feedback
        },
        {
          path: '/icon',
					name:'首页icon管理',
          component: Icon
        },
        {
          path: '/ingredient',
					name:'成分',
          component: Ingredient
        },
        {
          path: '/issue',
					name:'功效问题',
          component: Issue
        },
        {
          path: '/keyword',
					name:'屏蔽词',
          component: Keyword
        },
        {
          path: '/main',
					name:'步骤主类管理',
          component: Main
        },
        {
          path: '/makeup',
					name:'产品',
          component: Makeup
        },
        {
          path: '/newMakeup',
					name:'新产品',
          component: NewMakeup
        },
        {
          path: '/category',
					name:'新产品',
          component: Category
        },
        {
          path: '/newProduct',
					name:'产品(爬取)',
          component: NewProduct
        },
        {
          path: '/newIngredient',
					name:'成分(爬取)',
          component: NewIngredient
        },
        {
          path: '/marking',
					name:'颜值分数分析',
          component: Marking
        },
        {
          path: '/markingDetail',
					name:'颜值夸赞',
          component: MarkingDetail
        },
        {
          path: '/member',
					name:'美妆镜会员信息',
          component: Member
        },
        {
          path: '/menu',
					name:'菜单管理',
          component: Menu
        },
        {
          path: '/module',
					name:'AR试妆素材',
          component: Module
        },
        {
          path: '/part',
					name:'角色管理',
          component: Part
        },
        {
          path: '/product',
					name:'品类',
          component: Product
        },
        {
          path: '/categoryProblem',
					name:'化妆救急',
          component: CategoryProblem
        },
        {
          path: '/rotation',
					name:'轮播图',
          component: Rotation
        },
        {
          path: '/search',
					name:'热搜词',
          component: Search
        },
        {
          path: '/strategy',
					name:'护肤攻略管理',
          component: Strategy
        },
        {
          path: '/tag',
					name:'标签管理',
          component: Tag
        },
        {
          path: '/comment',
					name:'评论管理',
          component: Comment
        },
        {
          path: '/bloggers',
					name:'博主管理',
          component: Bloggers
        },
        {
          path: '/teach',
					name:'妆容教程',
          component: Teach
        },
        {
          path: '/temperament',
					name:'妆容定制气质管理',
          component: Temperament
        },
        {
          path: '/user',
					name:'后台用户',
          component: User,
        },
        {
          path: '/userInterested',
					name:'用户星座和感兴趣标签',
          component: UserInterested,
        },
        {
          path: '/labelCountAll',
					name:'标签数据',
          component: LabelCountAll,
        },
        {
          path: '/registeredUser',
					name:'用户基础数据',
          component: Registered,
        },
				{
					path: '/beautyMakeupDataAll',
					name:'文章数据',
					component: BeautyMakeupDataAll,
				},
				{
					path: '/knowledgeMes',
					name:'AI识颜数据',
					component: KnowledgeMes,
				},
        {
          path: '/vipMsg',
					name:'会员信息管理',
          component: VipMsg
        },
				{
					path:'/beautyknowledge',
					name:'美妆知识',
					component: Beautyknowledge
				},
				{
					path:'/hotsearch',
					name:'大家都在搜',
					component: Hotsearch
				},
				{
					path:'/answer',
					name:'答案之书',
					component: Answer
				},
				{
					path:'/shareDescribe',
					name:'分享文案',
					component: ShareDescribe
				},
				{
					path:'/interestedTest',
					name:'感兴趣内容测试',
					component: InterestedTest
				},
				{
					path:'/workspace',
					name:'数据总览',
					component: Workspace
				},
				{
					path:'/quickWork',
					name:'快捷菜单',
					component: QuickWork
				}
      ]
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },

  ]
})
