import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Icon from "@/components/ui/icon";

const objections = [
  {
    q: "У меня уже достаточно знаний и опыта",
    a: "Даже опытные мастера выигрывают от автоматизации рутины. Бот не заменяет ваш опыт — он освобождает время для творческих и сложных задач, повышая продуктивность.",
  },
  {
    q: "Я предпочитаю традиционные методы работы",
    a: "Бот не ломает традиции — он их усиливает. Используйте его для предварительного анализа материала, а свои художественные штрихи добавляйте самостоятельно.",
  },
  {
    q: "Цена кажется высокой",
    a: "Это инвестиция, а не расход. Бот сокращает время на заказ, вы принимаете больше клиентов и зарабатываете больше. Доступна рассрочка.",
  },
  {
    q: "Я не уверен в надёжности технологий",
    a: "Бот имеет интуитивный интерфейс, настроен под ваши задачи. Мы предоставляем обучение и техническую поддержку на каждом этапе.",
  },
  {
    q: "Не вижу, как бот улучшит мой бизнес",
    a: "Он расширяет ваш ассортимент услуг, повышает качество работы и клиентский сервис. Вы сможете браться за более сложные проекты и привлекать новую аудиторию.",
  },
];

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "problems", "features", "objections", "pricing", "dealers", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observers[id].observe(element);
    });

    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const anim = (id: string) =>
    `transition-all duration-700 ${visibleSections[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
            MAGIADECORIO
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">Возможности</a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Тарифы</a>
            <a href="#dealers" className="text-muted-foreground hover:text-white transition-colors">Дилерам</a>
          </nav>
          <a
            href="https://t.me/MAGIADECORIO_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all"
          >
            Попробовать
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/e3bc289c-f589-4460-84f1-86dce2b53858/files/6b5d6252-f7e2-42ff-afb6-c2dc7ee78f85.jpg"
            alt="Бот реставрации кожи"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={anim("hero")}>
              <div className="mb-6 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Современные технологии в реставрации
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Ваш умный помощник
                </span>
                <br />
                <span className="text-accent">в реставрации кожи</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Бот <strong className="text-accent">@MAGIADECORIO_bot</strong> — полная база знаний по реставрации кожи, замши, нубука и пластика. Пошаговые инструкции, советы и поддержка прямо в Telegram.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <a
                  href="https://t.me/MAGIADECORIO_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center"
                >
                  Открыть в Telegram
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white text-center"
                >
                  Узнать подробнее
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">4 вида</div>
                  <p className="text-sm text-white/60">Кожа, замша, нубук, пластик</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">24/7</div>
                  <p className="text-sm text-white/60">Доступ к базе знаний</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">15%</div>
                  <p className="text-sm text-white/60">Скидка на гайды</p>
                </div>
              </div>
            </div>

            <div className={`relative h-96 lg:h-[550px] flex items-center justify-center transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 bg-card/60 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 max-w-sm w-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="Bot" size={24} className="text-accent" fallback="Cpu" />
                  </div>
                  <div>
                    <div className="font-bold text-white">@MAGIADECORIO_bot</div>
                    <div className="text-sm text-accent">● онлайн</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Диагностика материала по описанию",
                    "Пошаговые инструкции реставрации",
                    "Подбор химии и инструментов",
                    "Советы по подготовке поверхности",
                    "База техник для всех типов кожи",
                    "Помощь в запуске мастерской",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section id="problems" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 ${anim("problems")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Почему мастера терпят неудачи</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Что мешает идеальному результату
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Каждая ошибка в реставрации — это потерянный клиент и испорченное изделие. Наш бот устраняет все эти барьеры.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "BookOpen", title: "Нехватка информации", desc: "Каждый вид кожи, замши и нубука требует индивидуального подхода. Мастера теряются в выборе техники." },
              { icon: "Wrench", title: "Неправильные инструменты", desc: "Неподходящие методы могут повредить материал, а не восстановить его — особенно у новичков." },
              { icon: "Layers", title: "Плохая подготовка поверхности", desc: "Без правильной подготовки адгезия материалов нарушается — реставрация держится недолго." },
              { icon: "FlaskConical", title: "Неверный выбор химии", desc: "Некоторые составы несовместимы с определёнными типами кожи или пластика." },
              { icon: "Clock", title: "Потеря времени", desc: "Часы поиска информации в интернете вместо реальной работы с заказами." },
              { icon: "TrendingDown", title: "Страх испортить изделие", desc: "Неуверенность заставляет отказываться от сложных заказов и терять доход." },
            ].map((item, i) => (
              <div
                key={i}
                className={`group p-8 border border-red-500/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${anim("problems")}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon name={item.icon} size={22} className="text-red-400 group-hover:text-accent transition-colors" fallback="AlertTriangle" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center p-10 border border-accent/30 rounded-3xl bg-accent/5 ${anim("problems")}`}>
            <div className="text-2xl font-bold text-white mb-3">
              Все эти проблемы решает <span className="text-accent">@MAGIADECORIO_bot</span>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Обширная база знаний, пошаговые инструкции и умный подбор решений — прямо в вашем Telegram.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 ${anim("features")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Возможности</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Эффективные инструменты и поддержка
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`p-10 border border-accent/20 rounded-3xl bg-card/50 ${anim("features")}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">Для мастеров-реставраторов</h3>
              <div className="space-y-4">
                {[
                  "База техник для кожи, замши, нубука, пластика и автокожи",
                  "Пошаговые инструкции по каждому виду работ",
                  "Помощь в подборе правильной химии и инструментов",
                  "Советы по диагностике изделия перед реставрацией",
                  "Информация о новых технологиях и методах",
                  "Блок «Запуск мастерской»: прайс, клиенты, продвижение",
                ].map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-10 border border-accent/40 rounded-3xl bg-accent/10 ${anim("features")}`} style={{ transitionDelay: "150ms" }}>
              <h3 className="text-2xl font-bold mb-6 text-white">Ваши результаты с ботом</h3>
              <div className="space-y-4">
                {[
                  "Меньше ошибок — выше качество каждого заказа",
                  "Экономия времени на поиске информации",
                  "Уверенность при работе со сложными материалами",
                  "Довольные клиенты и рост репутации",
                  "Возможность браться за более дорогие заказы",
                  "Рост дохода за счёт большего потока клиентов",
                ].map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Passion block */}
          <div className={`p-10 border border-accent/10 rounded-3xl bg-card/30 ${anim("features")}`}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">О мастерах реставрации</span>
                <h3 className="text-3xl font-bold mt-4 mb-6 text-white">Это не просто работа — это искусство</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мастера по реставрации кожи — это люди, влюблённые в своё дело. Они изучают старинные методы обработки, участвуют в мастер-классах, создают коллекции и вдохновляются историей каждого изделия.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Именно для таких мастеров мы создали бот — чтобы они могли сосредоточиться на творчестве, а не на поиске информации.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Palette", label: "Исторические техники" },
                  { icon: "Users", label: "Сообщество мастеров" },
                  { icon: "Star", label: "Уникальные изделия" },
                  { icon: "TrendingUp", label: "Рост навыков" },
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-accent/10 rounded-2xl bg-accent/5 flex flex-col items-center text-center gap-3">
                    <Icon name={item.icon} size={28} className="text-accent" fallback="Star" />
                    <span className="text-sm font-medium text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objections FAQ */}
      <section id="objections" className="py-32 px-6 bg-accent/5">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-16 ${anim("objections")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Развеем сомнения</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Частые вопросы
              </span>
            </h2>
          </div>

          <div className={`space-y-4 ${anim("objections")}`}>
            {objections.map((item, i) => (
              <div
                key={i}
                className="border border-accent/10 hover:border-accent/30 rounded-2xl overflow-hidden transition-all bg-card/50"
              >
                <button
                  className="w-full p-6 flex justify-between items-center text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-accent/10 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-20 ${anim("pricing")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Специальные предложения</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Тарифы и скидки
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Обучающий бот",
                badge: "",
                price: "Уточнить цену",
                features: [
                  "Полная база знаний по реставрации",
                  "Кожа, замша, нубук, пластик, автокожа",
                  "Пошаговые инструкции 24/7",
                  "Скидка 15% на гайды при покупке",
                ],
                highlight: false,
                cta: "Узнать стоимость",
              },
              {
                name: "Бот + Гайды",
                badge: "Выгодно",
                price: "Скидка 15%",
                features: [
                  "Всё из тарифа «Обучающий бот»",
                  "Гайды со скидкой 15%",
                  "Скидка 20% на химию при годовом доступе",
                  "Максимальная база знаний",
                ],
                highlight: true,
                cta: "Получить скидку",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`group relative transition-all duration-700 ${visibleSections["pricing"] ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${plan.highlight ? "md:scale-105" : ""}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                )}
                <div className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all ${plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-2xl">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-xs font-semibold bg-accent text-black px-2 py-1 rounded-full">{plan.badge}</span>
                      )}
                    </div>
                    <p className="text-4xl font-black text-accent mb-8">{plan.price}</p>
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex gap-3 text-sm items-start">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://t.me/MAGIADECORIO_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full px-6 py-4 rounded-xl font-semibold transition-all text-center block ${plan.highlight ? "bg-gradient-to-r from-accent to-accent/80 text-black hover:shadow-xl hover:shadow-accent/40" : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5"}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealers */}
      <section id="dealers" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-20 ${anim("dealers")}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Система скидок</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Дилерам и партнёрам
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-light">
              Специальные условия при закупке химии — от 12% до 35% скидки в зависимости от объёма.
            </p>
          </div>

          <div className={`space-y-4 ${anim("dealers")}`}>
            {[
              { range: "от 50 000 ₽", discount: "12%", note: "на грунты и краски", highlight: false },
              { range: "от 100 000 до 250 000 ₽", discount: "15%", note: "на всю химию (кроме линкеров и лаков)", highlight: false },
              { range: "от 250 000 до 500 000 ₽", discount: "20%", note: "на всю химию", highlight: false },
              { range: "от 500 000 ₽", discount: "25%", note: "на всю химию + автоматическое дилерство и полный дилерский пакет", highlight: true },
              { range: "от 1 250 000 ₽", discount: "30%", note: "на всю химию + монополия на оговоренные территории", highlight: false },
              { range: "от 3 200 000 ₽", discount: "35%", note: "все дилерские пакеты, монополия на регион и страну", highlight: false },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border rounded-2xl transition-all ${row.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"}`}
              >
                <div className="flex-1">
                  <span className="text-white font-semibold">Закупка {row.range}</span>
                  <p className="text-sm text-muted-foreground mt-1">{row.note}</p>
                </div>
                <div className={`text-3xl font-black flex-shrink-0 ${row.highlight ? "text-accent" : "text-white"}`}>
                  -{row.discount}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center ${anim("dealers")}`}>
            <a
              href="https://t.me/MAGIADECORIO_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg"
            >
              Стать дилером
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div className={`max-w-4xl mx-auto text-center ${anim("cta")}`}>
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Начните работать эффективнее уже сегодня
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Ваши клиенты оценят профессионализм и качество. Забудьте про испорченные изделия навсегда!
          </p>
          <a
            href="https://t.me/MAGIADECORIO_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg inline-flex items-center gap-3"
          >
            Открыть @MAGIADECORIO_bot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 MAGIADECORIO — Реставрация кожи нового уровня</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-white transition-colors">Условия</a>
            <a href="https://t.me/MAGIADECORIO_bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram-бот</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
