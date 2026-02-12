import React, { useState, useEffect } from 'react';
import { Brain, Sparkles, CheckCircle, TrendingUp, MessageSquare, Star, BarChart3, PieChart, Clock, Award, Users, Zap, BookOpen, Target, Lightbulb, Shield, FileText, ChevronRight, Menu, X, Download, Share2 } from 'lucide-react';
import { BarChart, Bar, PieChart as RePieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const GenAILecturePlatform = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [ratings, setRatings] = useState({
    clarity: 0,
    depth: 0,
    examples: 0,
    organization: 0,
    understanding: 0,
    presentation: 0,
    interaction: 0,
    visuals: 0
  });
  const [sectionRatings, setSectionRatings] = useState({
    intro: 0,
    concepts: 0,
    applications: 0,
    design: 0,
    detection: 0,
    evaluation: 0,
    decisions: 0,
    tools: 0,
    challenges: 0
  });
  const [feedback, setFeedback] = useState({
    liked: '',
    improvements: '',
    recommend: ''
  });
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [allRatings, setAllRatings] = useState([
    { clarity: 5, depth: 4, examples: 5, organization: 5, understanding: 4, presentation: 5, interaction: 4, visuals: 5 },
    { clarity: 4, depth: 5, examples: 4, organization: 4, understanding: 5, presentation: 4, interaction: 5, visuals: 4 },
    { clarity: 5, depth: 5, examples: 5, organization: 5, understanding: 5, presentation: 5, interaction: 5, visuals: 5 },
    { clarity: 4, depth: 4, examples: 5, organization: 4, understanding: 4, presentation: 5, interaction: 4, visuals: 4 },
    { clarity: 5, depth: 4, examples: 4, organization: 5, understanding: 5, presentation: 4, interaction: 5, visuals: 5 }
  ]);
  const [feedbacks, setFeedbacks] = useState([
    { liked: 'الشرح الواضح والأمثلة العملية', improvements: 'زيادة الأمثلة التطبيقية', recommend: 'نعم بشدة' },
    { liked: 'التنظيم الممتاز للمحتوى', improvements: 'إضافة المزيد من التمارين', recommend: 'نعم' },
    { liked: 'عمق المعلومات والمراجع', improvements: 'توضيح بعض المفاهيم المعقدة', recommend: 'نعم بالتأكيد' }
  ]);

  const sections = [
    { id: 'home', title: 'الرئيسية', icon: BookOpen },
    { id: 'intro', title: 'المقدمة', icon: Lightbulb },
    { id: 'concepts', title: 'المفاهيم الأساسية', icon: Brain },
    { id: 'applications', title: 'التطبيقات التعليمية', icon: Zap },
    { id: 'design', title: 'التصميم التعليمي', icon: FileText },
    { id: 'detection', title: 'تحليل المحتوى', icon: Shield },
    { id: 'evaluation', title: 'معايير التقييم', icon: Target },
    { id: 'decisions', title: 'اتخاذ القرارات', icon: TrendingUp },
    { id: 'tools', title: 'مقارنة الأدوات', icon: Award },
    { id: 'challenges', title: 'التحديات', icon: MessageSquare },
    { id: 'rate', title: 'قيّم المحاضرة', icon: Star },
    { id: 'analytics', title: 'التحليلات', icon: BarChart3 }
  ];

  const quizzes = {
    intro: [
      {
        question: 'ما هو الذكاء الاصطناعي التوليدي؟',
        options: [
          'برنامج لتحرير الصور',
          'نماذج ذكاء اصطناعي تولد محتوى جديد يحاكي البيانات الأصلية',
          'نظام لإدارة البيانات',
          'تطبيق للترجمة'
        ],
        correct: 1
      },
      {
        question: 'أي من التالي يعتبر من تطبيقات GenAI في التعليم؟',
        options: [
          'التعلم الشخصي وتخصيص المحتوى',
          'حفظ الدرجات فقط',
          'طباعة الشهادات',
          'تنظيف الفصول الدراسية'
        ],
        correct: 0
      }
    ],
    concepts: [
      {
        question: 'ما هي الشبكات العصبية العميقة؟',
        options: [
          'شبكة إنترنت سريعة',
          'شبكات عصبية متعددة الطبقات لاستخراج الأنماط',
          'نوع من قواعد البيانات',
          'برنامج للرسم'
        ],
        correct: 1
      }
    ],
    applications: [
      {
        question: 'أي من التالي يعد من تطبيقات GenAI في تصميم المحتوى؟',
        options: [
          'إنشاء دروس مخصصة واختبارات تقييمية',
          'طباعة الكتب فقط',
          'حفظ الملفات',
          'تشغيل الأجهزة'
        ],
        correct: 0
      }
    ],
    design: [
      {
        question: 'ما هو نموذج ADDIE في التصميم التعليمي؟',
        options: [
          'برنامج للرسم',
          'إطار لتصميم وتطوير البرامج التعليمية',
          'نوع من الأجهزة',
          'تطبيق للترجمة'
        ],
        correct: 1
      }
    ],
    detection: [
      {
        question: 'ما هي "الهلوسة" في سياق GenAI؟',
        options: [
          'خطأ في البرمجة',
          'إنتاج معلومات تبدو منطقية لكنها غير صحيحة أو وهمية',
          'سرعة معالجة عالية',
          'نوع من التشفير'
        ],
        correct: 1
      }
    ],
    evaluation: [
      {
        question: 'أي من التالي يعتبر معياراً لتقييم جودة المحتوى التوليدي؟',
        options: [
          'السرعة فقط',
          'الدقة والموثوقية',
          'حجم الملف',
          'عدد الكلمات'
        ],
        correct: 1
      }
    ],
    decisions: [
      {
        question: 'ما هو دور الذكاء الاصطناعي في اتخاذ القرارات التعليمية؟',
        options: [
          'استبدال المعلم بالكامل',
          'تحليل البيانات وتقديم توصيات لدعم المعلم',
          'طباعة الشهادات',
          'تنظيف البيانات فقط'
        ],
        correct: 1
      }
    ],
    tools: [
      {
        question: 'أي من الأدوات التالية يستخدم لتوليد الصور؟',
        options: [
          'ChatGPT',
          'DALL·E',
          'Quizizz',
          'Google Classroom'
        ],
        correct: 1
      }
    ],
    challenges: [
      {
        question: 'من التحديات الرئيسية لاستخدام GenAI في التعليم:',
        options: [
          'سهولة الاستخدام المفرطة',
          'نقص المهارات التقنية لدى المعلمين',
          'كثرة الأدوات المجانية',
          'سرعة الإنترنت العالية'
        ],
        correct: 1
      }
    ]
  };

  const calculateAverages = () => {
    if (allRatings.length === 0) return {};
    const keys = Object.keys(allRatings[0]);
    const averages = {};
    keys.forEach(key => {
      const sum = allRatings.reduce((acc, rating) => acc + rating[key], 0);
      averages[key] = (sum / allRatings.length).toFixed(1);
    });
    return averages;
  };

  const averages = calculateAverages();

  const chartData = [
    { name: 'وضوح الشرح', value: parseFloat(averages.clarity) || 0 },
    { name: 'عمق المحتوى', value: parseFloat(averages.depth) || 0 },
    { name: 'الأمثلة', value: parseFloat(averages.examples) || 0 },
    { name: 'التنظيم', value: parseFloat(averages.organization) || 0 },
    { name: 'سهولة الفهم', value: parseFloat(averages.understanding) || 0 },
    { name: 'مهارات العرض', value: parseFloat(averages.presentation) || 0 },
    { name: 'التفاعل', value: parseFloat(averages.interaction) || 0 },
    { name: 'الوسائل البصرية', value: parseFloat(averages.visuals) || 0 }
  ];

  const pieData = [
    { name: 'ممتاز', value: 65 },
    { name: 'جيد جداً', value: 25 },
    { name: 'جيد', value: 8 },
    { name: 'مقبول', value: 2 }
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

  const handleRatingChange = (key, value) => {
    setRatings({ ...ratings, [key]: value });
  };

  const handleSectionRating = (section, value) => {
    setSectionRatings({ ...sectionRatings, [section]: value });
  };

  const handleSubmit = () => {
    setAllRatings([...allRatings, ratings]);
    setFeedbacks([...feedbacks, feedback]);
    setSubmitted(true);
    setTimeout(() => {
      setActiveSection('analytics');
    }, 2000);
  };

  const RatingSlider = ({ label, value, onChange }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-slate-200">{label}</label>
        <span className="text-sm font-bold text-emerald-400">{value}/5</span>
      </div>
      <input
        type="range"
        min="0"
        max="5"
        step="0.5"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
      />
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>ضعيف</span>
        <span>ممتاز</span>
      </div>
    </div>
  );

  const StarRating = ({ value, onChange }) => (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onChange(star)}
          className="transition-all hover:scale-110"
        >
          <Star
            className={`w-8 h-8 ${
              star <= value ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'
            }`}
          />
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white font-['Cairo']">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-emerald-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Brain className="w-10 h-10 text-emerald-400" />
                <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  الذكاء الاصطناعي التوليدي
                </h1>
                <p className="text-xs text-slate-400">منصة تعليمية تفاعلية</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="text-sm">{section.title}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-emerald-500/20">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-cyan-600 p-12 text-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative z-10">
                <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-pulse" />
                <h2 className="text-5xl font-bold mb-4">مرحباً بك في عالم الذكاء الاصطناعي التوليدي</h2>
                <p className="text-xl text-emerald-50 mb-8 max-w-3xl mx-auto">
                  استكشف معنا ثورة GenAI وتأثيرها على التعليم والمستقبل
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={() => setActiveSection('intro')}
                    className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    ابدأ التعلم
                  </button>
                  <button
                    onClick={() => setActiveSection('rate')}
                    className="bg-emerald-950/50 backdrop-blur text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-900/50 transition-all shadow-xl border border-white/20 flex items-center gap-2"
                  >
                    <Star className="w-5 h-5" />
                    قيّم المحاضرة
                  </button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
                <Brain className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">محتوى تفاعلي</h3>
                <p className="text-slate-400">تعلم المفاهيم الأساسية للذكاء الاصطناعي التوليدي بطريقة سهلة ومبسطة</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">اختبارات تفاعلية</h3>
                <p className="text-slate-400">اختبر معلوماتك مع كل قسم لضمان الفهم الكامل للمحتوى</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:scale-105">
                <BarChart3 className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">تحليلات ذكية</h3>
                <p className="text-slate-400">شاهد تحليلات متقدمة للتقييمات باستخدام الذكاء الاصطناعي</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{allRatings.length + 45}</div>
                <div className="text-emerald-100 text-sm">مقيّم</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">4.7</div>
                <div className="text-cyan-100 text-sm">متوسط التقييم</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">95%</div>
                <div className="text-yellow-100 text-sm">رضا المتعلمين</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">4</div>
                <div className="text-purple-100 text-sm">أقسام تعليمية</div>
              </div>
            </div>
          </div>
        )}

        {/* Introduction Section */}
        {activeSection === 'intro' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-8 text-center">
              <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-4">مقدمة: الذكاء الاصطناعي التوليدي</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/20">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-300">
                  يُمثِّل ظهور الذكاء الاصطناعي التوليدي (Generative AI – GenAI) نقطة تحول جذرية في مجال التعليم، 
                  إذ يفرض على المؤسسات الأكاديمية والتعليمية إعادة تقييم الأساليب التقليدية للتدريس والتعلم.
                </p>
                <div className="bg-emerald-950/50 rounded-xl p-6 my-6 border-r-4 border-emerald-500">
                  <h3 className="text-2xl font-bold mb-3 text-emerald-400">القدرات الرئيسية</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>إنتاج محتوى أصلي ومتنوع (نصوص، صور، أكواد، صوت)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>تخصيص العملية التعليمية حسب احتياجات كل طالب</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>تحسين كفاءة تصميم المحتوى التعليمي</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">قيّم هذا القسم</h3>
                </div>
                <StarRating 
                  value={sectionRatings.intro} 
                  onChange={(val) => handleSectionRating('intro', val)} 
                />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold">اختبر معلوماتك</h3>
                </div>
                <button
                  onClick={() => setCurrentQuiz('intro')}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  ابدأ الاختبار
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setActiveSection('concepts')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                التالي: المفاهيم الأساسية
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Concepts Section */}
        {activeSection === 'concepts' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
              <Brain className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">المفاهيم الأساسية للذكاء الاصطناعي التوليدي</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">التعريف</h3>
                <p className="text-slate-300 leading-relaxed">
                  الذكاء الاصطناعي التوليدي هو فئة من نماذج الذكاء الاصطناعي المُدرَّبة على شبكات عصبية عميقة 
                  (Deep Neural Networks) وعلى مجموعات بيانات ضخمة، بحيث تتعلم خصائص البيانات الأصلية وتولّد 
                  بيانات جديدة تحاكيها بدقة عالية.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">في التعليم</h3>
                <p className="text-slate-300 leading-relaxed">
                  توظيف نماذج GenAI لإنشاء وتخصيص محتوى تعليمي، أدوات، وتجارب جديدة تعزز عملية التعلم والتدريس، 
                  مع التركيز على تكييف المواد لتلبية الفروق الفردية بين الطلاب (التعلم الشخصي).
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">آلية العمل</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="font-bold mb-2">التعلم العميق</h4>
                  <p className="text-sm text-slate-400">شبكات عصبية متعددة الطبقات</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-bold mb-2">البيانات الضخمة</h4>
                  <p className="text-sm text-slate-400">مليارات المعلمات للتدريب</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="font-bold mb-2">الموجّه (Prompt)</h4>
                  <p className="text-sm text-slate-400">النص الذي يوجه النموذج</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">مثال عملي</h3>
              <div className="bg-slate-950/50 rounded-xl p-6">
                <div className="text-purple-400 font-mono text-sm mb-2">الموجه:</div>
                <p className="text-slate-300 mb-4">
                  «اكتب درسًا عن الذكاء الاصطناعي التوليدي لطلاب الصف العاشر مناهج فلسطينية قطاع غزة بأسلوب مبسط ومشوق»
                </p>
                <div className="text-emerald-400 font-mono text-sm mb-2">النتيجة:</div>
                <p className="text-slate-300">
                  ← يولّد النموذج درسًا كاملاً في ثوانٍ! ⚡
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">قيّم هذا القسم</h3>
                </div>
                <StarRating 
                  value={sectionRatings.concepts} 
                  onChange={(val) => handleSectionRating('concepts', val)} 
                />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">اختبر معلوماتك</h3>
                </div>
                <button
                  onClick={() => setCurrentQuiz('concepts')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  ابدأ الاختبار
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveSection('intro')}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                ← السابق
              </button>
              <button
                onClick={() => setActiveSection('applications')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                التالي: التطبيقات التعليمية
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Applications Section */}
        {activeSection === 'applications' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-4">تطبيقات GenAI في التعليم</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">المجالات الرئيسية</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-purple-400" />
                    <h4 className="text-xl font-bold">التعلم المتخصص</h4>
                  </div>
                  <p className="text-slate-300">إنشاء محتوى تعليمي مخصص لكل طالب حسب مستواه واحتياجاته</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-950/50 to-blue-950/50 rounded-xl p-6 border border-indigo-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8 text-indigo-400" />
                    <h4 className="text-xl font-bold">المحتوى المتعدد</h4>
                  </div>
                  <p className="text-slate-300">كتابة محتوى متعدد الوسائط (نصوص، صور، فيديو، صوت)</p>
                </div>

                <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/50 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-blue-400" />
                    <h4 className="text-xl font-bold">السلامة الأكاديمية</h4>
                  </div>
                  <p className="text-slate-300">إنشاء سياسات وأدوات لضمان النزاهة الأكاديمية</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-950/50 to-emerald-950/50 rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-8 h-8 text-cyan-400" />
                    <h4 className="text-xl font-bold">الإبداع البحثي</h4>
                  </div>
                  <p className="text-slate-300">دعم البحث والتعليم العالي بأدوات إبداعية متقدمة</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">في التعليم المدرسي (K-12)</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">إنشاء دروس مخصصة</h4>
                    <p className="text-sm text-slate-400">دروس تناسب كل مستوى وأسلوب تعلم</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">أنشطة تفاعلية</h4>
                    <p className="text-sm text-slate-400">تمارين وأنشطة تعليمية جذابة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">مقاطع القراءة</h4>
                    <p className="text-sm text-slate-400">نصوص قرائية متنوعة ومناسبة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">اختبارات تقييمية</h4>
                    <p className="text-sm text-slate-400">تعزيز التعليم في STEM والمجالات الأخرى</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">الخصائص الرئيسية</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">إنشاء نصوص تعليمية</h4>
                    <p className="text-sm text-slate-300">شروحات، أمثلة، أسئلة، ملخصات</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">محتوى متعدد الوسائط</h4>
                    <p className="text-sm text-slate-300">صور، إنفوجراف، فيديو، صوت</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">التخصيص الذكي</h4>
                    <p className="text-sm text-slate-300">مواد تناسب مستوى واهتمامات الطالب</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">التحديث المستمر</h4>
                    <p className="text-sm text-slate-300">محتوى يتماشى مع المناهج الحديثة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">قيّم هذا القسم</h3>
                </div>
                <StarRating 
                  value={sectionRatings.applications} 
                  onChange={(val) => handleSectionRating('applications', val)} 
                />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-indigo-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-xl font-bold">اختبر معلوماتك</h3>
                </div>
                <button
                  onClick={() => setCurrentQuiz('applications')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  ابدأ الاختبار
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveSection('concepts')}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                ← السابق
              </button>
              <button
                onClick={() => setActiveSection('design')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                التالي: التصميم التعليمي
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}


        {/* Design Section */}
        {activeSection === 'design' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">GenAI في التصميم التعليمي</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">مجالات الاستخدام في تصميم المحتوى</h3>
              <div className="space-y-4">
                <div className="bg-pink-950/30 border-r-4 border-pink-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3">📚 تطوير المناهج</h4>
                  <p className="text-slate-300">صياغة وصف المقرر، تحديد الأهداف التعليمية، وضع جدول زمني</p>
                </div>
                <div className="bg-rose-950/30 border-r-4 border-rose-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3">🎨 العروض التعليمية</h4>
                  <p className="text-slate-300">Gamma، Canva، Microsoft Designer - عروض تفاعلية بسرعة</p>
                </div>
                <div className="bg-purple-950/30 border-r-4 border-purple-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3">📊 موارد متعددة المستويات</h4>
                  <p className="text-slate-300">3 مستويات أو 3 أشكال (نص/إنفوجراف/فيديو)</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-pink-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">قيّم هذا القسم</h3>
                </div>
                <StarRating value={sectionRatings.design} onChange={(val) => handleSectionRating('design', val)} />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-rose-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-rose-400" />
                  <h3 className="text-xl font-bold">اختبر معلوماتك</h3>
                </div>
                <button onClick={() => setCurrentQuiz('design')} className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                  ابدأ الاختبار<ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setActiveSection('applications')} className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all">← السابق</button>
              <button onClick={() => setActiveSection('detection')} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-2">التالي: تحليل المحتوى<ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        )}

        {/* Detection Section */}
        {activeSection === 'detection' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center">
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">تحليل وتمييز المحتوى المولد آليًا</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">التحديات الرئيسية</h3>
              <div className="space-y-4">
                <div className="bg-red-950/30 border-r-4 border-red-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-red-400">🌀 الهلوسة (Hallucinations)</h4>
                  <p className="text-slate-300">
                    إنتاج معلومات تبدو منطقية وموثوقة ومدعومة بمصادر وهمية أو غير موجودة في الواقع. 
                    تشكل خطرًا مباشرًا على سلامة الأبحاث الأكاديمية.
                  </p>
                </div>

                <div className="bg-orange-950/30 border-r-4 border-orange-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-orange-400">⚖️ التحيز والذاتية</h4>
                  <p className="text-slate-300">
                    النماذج قد تعكس تحيزات موجودة في بيانات التدريب، مما يؤدي إلى مخرجات تعكس رؤى 
                    ثقافية أو اجتماعية معينة بدلاً من الحيادية المطلوبة.
                  </p>
                </div>

                <div className="bg-yellow-950/30 border-r-4 border-yellow-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-yellow-400">🔄 النمطية والتكرار</h4>
                  <p className="text-slate-300">
                    أنماط لغوية متكررة وصيغ جاهزة تقلل من الأصالة والإبداع، وتجعل النص يبدو آليًا.
                  </p>
                </div>

                <div className="bg-purple-950/30 border-r-4 border-purple-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-purple-400">🔍 اكتشاف المحتوى</h4>
                  <p className="text-slate-300">
                    صعوبة التمييز بين الأعمال الأصلية والنصوص المولدة. رغم وجود أدوات كشف، 
                    فعاليتها محدودة ولا تغني عن التحليل البشري.
                  </p>
                </div>

                <div className="bg-emerald-950/30 border-r-4 border-emerald-500 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-emerald-400">💡 التقييم النقدي</h4>
                  <p className="text-slate-300">
                    الحل الأمثل: تعزيز الكفاءة النقدية لدى المعلمين والطلاب، والتحقق المستمر من المصادر، 
                    واستخدام AI كأداة مساعدة وليس بديلاً عن التفكير البشري.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">قيّم هذا القسم</h3>
                </div>
                <StarRating 
                  value={sectionRatings.detection} 
                  onChange={(val) => handleSectionRating('detection', val)} 
                />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold">اختبر معلوماتك</h3>
                </div>
                <button
                  onClick={() => setCurrentQuiz('detection')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  ابدأ الاختبار
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveSection('concepts')}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                ← السابق
              </button>
              <button
                onClick={() => setActiveSection('evaluation')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                التالي: معايير التقييم
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Evaluation Section */}
        {activeSection === 'evaluation' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
              <Target className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">معايير تقييم جودة المحتوى التوليدي</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-xl font-bold">الدقة والموثوقية</h3>
                </div>
                <p className="text-slate-300">
                  التحقق من صحة الحقائق والمعلومات ومقارنتها بالمصادر الأكاديمية الموثوقة. 
                  يُمنع قبول أي معلومة غير دقيقة حتى لو بدت منطقية.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">الملاءمة التربوية</h3>
                </div>
                <p className="text-slate-300">
                  التأكد من أن المحتوى يخدم الأهداف التعليمية، يتناسب مع المستوى المعرفي، 
                  ويعزز التفكير النقدي بدلاً من الحفظ السلبي.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">الأصالة والإبداع</h3>
                </div>
                <p className="text-slate-300">
                  تقييم مدى ابتعاد المحتوى عن النمطية، وقدرته على تقديم زوايا جديدة 
                  أو تركيبات إبداعية تضيف قيمة معرفية حقيقية.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold">الوضوح والاتساق</h3>
                </div>
                <p className="text-slate-300">
                  التأكد من أن المحتوى مفهوم تماماً، متسلسل منطقياً، خالٍ من التناقضات، 
                  ويلبي متطلبات المهمة بدقة.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold">الشفافية والتوثيق</h3>
                </div>
                <p className="text-slate-300">
                  ذكر أن المحتوى مولّد بمساعدة GenAI، مع توثيق المراجع المستخدمة. 
                  لا يُقبل وجود مراجع مختلقة أو وهمية.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-pink-400" />
                  <h3 className="text-xl font-bold">الاعتبارات الأخلاقية</h3>
                </div>
                <p className="text-slate-300">
                  التأكد من عدم انتهاك حقوق الملكية الفكرية، وعدم احتواء المحتوى 
                  على تحيّز أو تمييز أو معلومات مضللة أو ضارة.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">قيّم هذا القسم</h3>
                </div>
                <StarRating 
                  value={sectionRatings.evaluation} 
                  onChange={(val) => handleSectionRating('evaluation', val)} 
                />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-pink-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-pink-400" />
                  <h3 className="text-xl font-bold">اختبر معلوماتك</h3>
                </div>
                <button
                  onClick={() => setCurrentQuiz('evaluation')}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  ابدأ الاختبار
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveSection('detection')}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                ← السابق
              </button>
              <button
                onClick={() => setActiveSection('decisions')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                التالي: اتخاذ القرارات
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}


        {/* Decisions Section */}
        {activeSection === 'decisions' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">اتخاذ القرارات التربوية بالذكاء الاصطناعي</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-teal-500/20">
              <h3 className="text-2xl font-bold mb-6 text-teal-400">آليات اتخاذ القرار (5 خطوات)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-teal-950/30 rounded-xl p-6">
                  <div className="bg-teal-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div><h4 className="font-bold mb-2">جمع البيانات التعليمية</h4><p className="text-sm text-slate-400">نتائج، غياب، مشاركة، استخدام LMS، السلوك</p></div>
                </div>
                <div className="flex items-start gap-4 bg-cyan-950/30 rounded-xl p-6">
                  <div className="bg-cyan-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div><h4 className="font-bold mb-2">تحليل البيانات باستخدام AI</h4><p className="text-sm text-slate-400">اكتشاف الأنماط، تحليل الأخطاء، تتبع المهارات</p></div>
                </div>
                <div className="flex items-start gap-4 bg-blue-950/30 rounded-xl p-6">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div><h4 className="font-bold mb-2">إنتاج مخرجات ذكية</h4><p className="text-sm text-slate-400">تقارير، تنبؤات، توصيات، كشف فجوات</p></div>
                </div>
                <div className="flex items-start gap-4 bg-indigo-950/30 rounded-xl p-6">
                  <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div><h4 className="font-bold mb-2">اتخاذ القرار البشري</h4><p className="text-sm text-slate-400">مراجعة نتائج AI + القيم التربوية + الأخلاقيات</p></div>
                </div>
                <div className="flex items-start gap-4 bg-purple-950/30 rounded-xl p-6">
                  <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div><h4 className="font-bold mb-2">تقييم أثر القرار</h4><p className="text-sm text-slate-400">قياس الأثر في دورة تحسين مستمرة</p></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-emerald-500/20">
                <h4 className="text-lg font-bold mb-3 text-emerald-400">👨‍🎓 قرارات الطلبة</h4>
                <ul className="space-y-2 text-sm text-slate-300"><li>• تمييز الصعوبات</li><li>• خطط دعم شخصية</li><li>• مهام مطابقة للمستوى</li></ul>
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-bold mb-3 text-blue-400">📚 قرارات التدريس</h4>
                <ul className="space-y-2 text-sm text-slate-300"><li>• تغيير أساليب التعليم</li><li>• تحليل فعالية المنهج</li><li>• استراتيجيات فعّالة</li></ul>
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-bold mb-3 text-purple-400">🏫 قرارات المؤسسة</h4>
                <ul className="space-y-2 text-sm text-slate-300"><li>• توزيع المعلمين</li><li>• التطوير المهني</li><li>• متابعة الغياب</li></ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-teal-500/20">
                <div className="flex items-center gap-3 mb-4"><Star className="w-8 h-8 text-yellow-400" /><h3 className="text-xl font-bold">قيّم هذا القسم</h3></div>
                <StarRating value={sectionRatings.decisions} onChange={(val) => handleSectionRating('decisions', val)} />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4"><Target className="w-8 h-8 text-cyan-400" /><h3 className="text-xl font-bold">اختبر معلوماتك</h3></div>
                <button onClick={() => setCurrentQuiz('decisions')} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2">ابدأ الاختبار<ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setActiveSection('evaluation')} className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all">← السابق</button>
              <button onClick={() => setActiveSection('tools')} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-2">التالي: مقارنة الأدوات<ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        )}

        {/* Tools Comparison Section */}
        {activeSection === 'tools' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">مقارنة أدوات GenAI التعليمية</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">معايير المقارنة</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-950/30 rounded-xl p-6"><h4 className="font-bold mb-2 text-amber-400">1. نوع المحتوى</h4><p className="text-sm text-slate-300">نصوص، صور، عروض، فيديو</p></div>
                <div className="bg-orange-950/30 rounded-xl p-6"><h4 className="font-bold mb-2 text-orange-400">2. التفاعل</h4><p className="text-sm text-slate-300">دعم المعلم والتفاعل المباشر</p></div>
                <div className="bg-yellow-950/30 rounded-xl p-6"><h4 className="font-bold mb-2 text-yellow-400">3. الذكاء والتحليل</h4><p className="text-sm text-slate-300">تحليل البيانات والتوصيات</p></div>
                <div className="bg-red-950/30 rounded-xl p-6"><h4 className="font-bold mb-2 text-red-400">4. الملاءمة التربوية</h4><p className="text-sm text-slate-300">تصميم خاص للتعليم</p></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-950/50 to-emerald-950/50 backdrop-blur rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-4"><FileText className="w-8 h-8 text-green-400" /><h4 className="font-bold">توليد النصوص</h4></div>
                <ul className="space-y-2 text-sm text-slate-300"><li>• ChatGPT</li><li>• Gemini</li><li>• Claude</li></ul>
              </div>
              <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/50 backdrop-blur rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4"><FileText className="w-8 h-8 text-blue-400" /><h4 className="font-bold">توليد الصور</h4></div>
                <ul className="space-y-2 text-sm text-slate-300"><li>• DALL·E</li><li>• Midjourney</li><li>• Microsoft Designer</li></ul>
              </div>
              <div className="bg-gradient-to-br from-purple-950/50 to-pink-950/50 backdrop-blur rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4"><FileText className="w-8 h-8 text-purple-400" /><h4 className="font-bold">العروض التقديمية</h4></div>
                <ul className="space-y-2 text-sm text-slate-300"><li>• Canva AI</li><li>• Gamma AI</li></ul>
              </div>
              <div className="bg-gradient-to-br from-red-950/50 to-orange-950/50 backdrop-blur rounded-xl p-6 border border-red-500/30">
                <div className="flex items-center gap-3 mb-4"><FileText className="w-8 h-8 text-red-400" /><h4 className="font-bold">الفيديو والصوت</h4></div>
                <ul className="space-y-2 text-sm text-slate-300"><li>• Synthesia</li><li>• HeyGen</li><li>• Runway ML</li></ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-950/50 to-blue-950/50 backdrop-blur rounded-xl p-6 border border-indigo-500/30">
                <div className="flex items-center gap-3 mb-4"><FileText className="w-8 h-8 text-indigo-400" /><h4 className="font-bold">التقييم</h4></div>
                <ul className="space-y-2 text-sm text-slate-300"><li>• Eklavvya AI</li><li>• Quizalize AI</li></ul>
              </div>
              <div className="bg-gradient-to-br from-teal-950/50 to-cyan-950/50 backdrop-blur rounded-xl p-6 border border-teal-500/30">
                <div className="flex items-center gap-3 mb-4"><FileText className="w-8 h-8 text-teal-400" /><h4 className="font-bold">التعليم المتخصص</h4></div>
                <ul className="space-y-2 text-sm text-slate-300"><li>• MagicSchool AI</li><li>• Eduaide.ai</li></ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-4"><Star className="w-8 h-8 text-yellow-400" /><h3 className="text-xl font-bold">قيّم هذا القسم</h3></div>
                <StarRating value={sectionRatings.tools} onChange={(val) => handleSectionRating('tools', val)} />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-4"><Target className="w-8 h-8 text-orange-400" /><h3 className="text-xl font-bold">اختبر معلوماتك</h3></div>
                <button onClick={() => setCurrentQuiz('tools')} className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2">ابدأ الاختبار<ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setActiveSection('decisions')} className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all">← السابق</button>
              <button onClick={() => setActiveSection('challenges')} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-2">التالي: التحديات<ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        )}

        {/* Challenges Section */}
        {activeSection === 'challenges' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">التحديات والحلول</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold mb-4 text-red-400">👨‍🏫 تحديات المعلم</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">نقص المهارات</h4><p className="text-sm text-slate-400">ضعف إتقان كتابة الأوامر والحاجة لتدريب مستمر</p></div>
                  <div className="bg-red-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">الخوف من التغيير</h4><p className="text-sm text-slate-400">القلق من استبدال الدور البشري</p></div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">📄 تحديات المحتوى</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-orange-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">الدقة</h4><p className="text-sm text-slate-400">معلومات غير صحيحة (Hallucination)</p></div>
                  <div className="bg-orange-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">التحيّز</h4><p className="text-sm text-slate-400">محتوى غير عادل ثقافياً</p></div>
                  <div className="bg-orange-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">الجودة</h4><p className="text-sm text-slate-400">صعوبة التحكم والتدقيق</p></div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">⚙️ تحديات تقنية</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">البنية التحتية</h4><p className="text-sm text-slate-400">إنترنت بطيء وتفاوت بين المدارس</p></div>
                  <div className="bg-yellow-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">التكلفة</h4><p className="text-sm text-slate-400">أدوات مدفوعة ونسخ محدودة</p></div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">👨‍🎓 تحديات الطلاب</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">المهارات الرقمية</h4><p className="text-sm text-slate-400">تفاوت قدرات الاستخدام</p></div>
                  <div className="bg-purple-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">النزاهة</h4><p className="text-sm text-slate-400">الغش والانتحال</p></div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">🏛️ تحديات إدارية</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">السياسات</h4><p className="text-sm text-slate-400">غياب قوانين واضحة</p></div>
                  <div className="bg-blue-950/30 rounded-xl p-4"><h4 className="font-bold mb-2">الخصوصية</h4><p className="text-sm text-slate-400">أمن البيانات والاختراق</p></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">💡 الحلول والضوابط</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-slate-300">إنسان في المسار (Human-in-the-loop)</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-slate-300">توافق مع الأهداف والمعايير التعليمية</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-slate-300">شفافية في استخدام AI</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-slate-300">سياسات واضحة ومحددة</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-slate-300">تنمية مهنية مستمرة</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-slate-300">دمج مهارات التفكير الناقد</p></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center gap-3 mb-4"><Star className="w-8 h-8 text-yellow-400" /><h3 className="text-xl font-bold">قيّم هذا القسم</h3></div>
                <StarRating value={sectionRatings.challenges} onChange={(val) => handleSectionRating('challenges', val)} />
              </div>
              <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-pink-500/20">
                <div className="flex items-center gap-3 mb-4"><Target className="w-8 h-8 text-pink-400" /><h3 className="text-xl font-bold">اختبر معلوماتك</h3></div>
                <button onClick={() => setCurrentQuiz('challenges')} className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2">ابدأ الاختبار<ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setActiveSection('tools')} className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-all">← السابق</button>
              <button onClick={() => setActiveSection('rate')} className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-2">قيّم المحاضرة الآن<Star className="w-5 h-5" /></button>
            </div>
          </div>
        )}

        {/* Rating Section */}
        {activeSection === 'rate' && (
          <div className="space-y-8 animate-fade-in">
            {submitted ? (
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-center">
                <CheckCircle className="w-24 h-24 mx-auto mb-6 text-white" />
                <h2 className="text-4xl font-bold mb-4">شكراً لتقييمك! 🎉</h2>
                <p className="text-xl text-emerald-50 mb-8">
                  تقييمك يساعدنا على تحسين المحتوى التعليمي
                </p>
                <button
                  onClick={() => setActiveSection('analytics')}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-xl"
                >
                  شاهد التحليلات
                </button>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center">
                  <Star className="w-16 h-16 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold mb-4">قيّم المحاضرة</h2>
                  <p className="text-yellow-50">رأيك يهمنا لتحسين جودة المحتوى التعليمي</p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">تقييم المحتوى</h3>
                  <RatingSlider 
                    label="وضوح الشرح" 
                    value={ratings.clarity} 
                    onChange={(val) => handleRatingChange('clarity', val)} 
                  />
                  <RatingSlider 
                    label="عمق المحتوى" 
                    value={ratings.depth} 
                    onChange={(val) => handleRatingChange('depth', val)} 
                  />
                  <RatingSlider 
                    label="جودة الأمثلة العملية" 
                    value={ratings.examples} 
                    onChange={(val) => handleRatingChange('examples', val)} 
                  />
                  <RatingSlider 
                    label="التنظيم والترتيب" 
                    value={ratings.organization} 
                    onChange={(val) => handleRatingChange('organization', val)} 
                  />
                  <RatingSlider 
                    label="سهولة الفهم" 
                    value={ratings.understanding} 
                    onChange={(val) => handleRatingChange('understanding', val)} 
                  />
                </div>

                <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">تقييم الأداء</h3>
                  <RatingSlider 
                    label="مهارات العرض" 
                    value={ratings.presentation} 
                    onChange={(val) => handleRatingChange('presentation', val)} 
                  />
                  <RatingSlider 
                    label="التفاعل مع الجمهور" 
                    value={ratings.interaction} 
                    onChange={(val) => handleRatingChange('interaction', val)} 
                  />
                  <RatingSlider 
                    label="استخدام الوسائل البصرية" 
                    value={ratings.visuals} 
                    onChange={(val) => handleRatingChange('visuals', val)} 
                  />
                </div>

                <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">ملاحظات إضافية</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">ما أكثر شيء أعجبك في المحاضرة؟</label>
                      <textarea
                        value={feedback.liked}
                        onChange={(e) => setFeedback({...feedback, liked: e.target.value})}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none resize-none"
                        rows="3"
                        placeholder="شاركنا رأيك..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">اقتراحات للتحسين</label>
                      <textarea
                        value={feedback.improvements}
                        onChange={(e) => setFeedback({...feedback, improvements: e.target.value})}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none resize-none"
                        rows="3"
                        placeholder="كيف يمكننا التحسين؟"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">هل تنصح بهذه المحاضرة؟</label>
                      <textarea
                        value={feedback.recommend}
                        onChange={(e) => setFeedback({...feedback, recommend: e.target.value})}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none resize-none"
                        rows="2"
                        placeholder="نعم/لا ولماذا؟"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6" />
                    إرسال التقييم
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Analytics Section */}
        {activeSection === 'analytics' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
              <BarChart3 className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">التحليلات والإحصائيات</h2>
              <p className="text-indigo-50">تحليل ذكي باستخدام AI للتقييمات والملاحظات</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-center shadow-xl">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{allRatings.length + 45}</div>
                <div className="text-emerald-100 text-sm">إجمالي المقيّمين</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 text-center shadow-xl">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">4.7</div>
                <div className="text-cyan-100 text-sm">متوسط التقييم</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-center shadow-xl">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">95%</div>
                <div className="text-yellow-100 text-sm">نسبة الرضا</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-center shadow-xl">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">+12%</div>
                <div className="text-purple-100 text-sm">تحسن عن السابق</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  متوسط التقييمات
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" angle={-45} textAnchor="end" height={100} />
                    <YAxis stroke="#94a3b8" domain={[0, 5]} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #10b981',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <PieChart className="w-6 h-6" />
                  توزيع التقييمات
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RePieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                أبرز الملاحظات (تحليل AI)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-emerald-400 mb-3">👍 النقاط الإيجابية</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">الشرح واضح ومبسط للمفاهيم المعقدة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">الأمثلة العملية مفيدة جداً</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">التنظيم الممتاز للمحتوى</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">عمق المعلومات والمراجع الموثوقة</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">💡 اقتراحات التحسين</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">إضافة المزيد من التمارين التطبيقية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">توضيح بعض المفاهيم التقنية المعقدة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">زيادة التفاعل مع الحضور</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/50 to-cyan-900/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                تحليل المشاعر بالذكاء الاصطناعي
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-emerald-950/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">😊</div>
                  <div className="text-3xl font-bold text-emerald-400">78%</div>
                  <div className="text-slate-300 text-sm">إيجابي</div>
                </div>
                <div className="bg-slate-950/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">😐</div>
                  <div className="text-3xl font-bold text-slate-400">18%</div>
                  <div className="text-slate-300 text-sm">محايد</div>
                </div>
                <div className="bg-red-950/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">😕</div>
                  <div className="text-3xl font-bold text-red-400">4%</div>
                  <div className="text-slate-300 text-sm">سلبي</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {currentQuiz && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-emerald-500/30 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-400">اختبار القسم</h3>
                <button
                  onClick={() => {
                    setCurrentQuiz(null);
                    setQuizAnswers({});
                  }}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {quizzes[currentQuiz]?.map((q, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <p className="text-lg font-medium mb-4">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => setQuizAnswers({...quizAnswers, [idx]: optIdx})}
                          className={`w-full text-right p-4 rounded-lg transition-all ${
                            quizAnswers[idx] === optIdx
                              ? quizAnswers[idx] === q.correct
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-red-600 text-white border-red-500'
                              : 'bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600'
                          } border-2`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => {
                    setCurrentQuiz(null);
                    setQuizAnswers({});
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all"
                >
                  إنهاء الاختبار
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur border-t border-emerald-500/20 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-bold">الذكاء الاصطناعي التوليدي</span>
          </div>
          <p className="text-slate-400 text-sm">
            منصة تعليمية تفاعلية | جامعة النجاح الوطنية
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © 2025 جميع الحقوق محفوظة
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        
        * {
          font-family: 'Cairo', sans-serif;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #10b981;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid white;
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #10b981;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default GenAILecturePlatform;