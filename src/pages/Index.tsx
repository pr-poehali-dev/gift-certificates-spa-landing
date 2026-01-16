import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const programs = [
  {
    id: 1,
    title: 'Традиционный тайский массаж',
    duration: '60 минут',
    price: '3500 ₽',
    description: 'Классическая техника с использованием акупрессуры и растяжек для восстановления энергетического баланса',
    image: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/09fc3043-4e28-42a2-8125-4199a9932226.jpg'
  },
  {
    id: 2,
    title: 'Массаж горячими камнями',
    duration: '90 минут',
    price: '5500 ₽',
    description: 'Глубокая релаксация с применением базальтовых камней, прогретых до оптимальной температуры',
    image: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/a7db6403-6b7f-4898-9a8d-159b1b9ccf7a.jpg'
  },
  {
    id: 3,
    title: 'Ароматерапевтический массаж',
    duration: '75 минут',
    price: '4500 ₽',
    description: 'Нежный массаж с использованием натуральных эфирных масел для гармонии тела и души',
    image: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/3db8823b-f80f-46f1-9a0a-7bd55b37bf03.jpg'
  }
];

const galleryImages = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/1b9eff11-499a-4831-8e9b-82526cf6ebf6.jpg',
    title: 'Атмосфера релакса'
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/8112522c-57c3-448e-9da9-e8db0989ae92.jpg',
    title: 'Массажный кабинет'
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/7c969e87-b558-4c68-b064-d4819f3cbab6.jpg',
    title: 'Зона отдыха'
  },
  {
    id: 4,
    url: 'https://cdn.poehali.dev/projects/b50b49c9-992d-4232-9b84-9d968aa3b2c7/files/a7db6403-6b7f-4898-9a8d-159b1b9ccf7a.jpg',
    title: 'Процедурная'
  }
];

const benefits = [
  { icon: 'Heart', title: 'Снятие стресса', description: 'Глубокая релаксация и восстановление нервной системы' },
  { icon: 'Sparkles', title: 'Улучшение циркуляции', description: 'Активизация кровотока и лимфодренажа' },
  { icon: 'Leaf', title: 'Природные масла', description: 'Только натуральные компоненты высшего качества' },
  { icon: 'Users', title: 'Профессионалы', description: 'Сертифицированные мастера из Таиланда' }
];

const testimonials = [
  { name: 'Анна Петрова', text: 'Потрясающий опыт! После массажа чувствую себя обновленной. Особенно понравилась атмосфера спокойствия и профессионализм мастера.', rating: 5 },
  { name: 'Дмитрий Соколов', text: 'Подарил сертификат жене на день рождения. Она была в восторге! Теперь ходим вместе каждый месяц.', rating: 5 },
  { name: 'Елена Смирнова', text: 'Лучший подарок, который я получала. Массаж горячими камнями просто волшебный. Рекомендую всем!', rating: 5 }
];

export default function Index() {
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderPhone: '',
    program: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения заказа.",
    });
    setFormData({
      recipientName: '',
      recipientEmail: '',
      senderName: '',
      senderPhone: '',
      program: '',
      message: ''
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const openGallery = (index: number) => {
    setCurrentGalleryImage(index);
    setGalleryOpen(true);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-sand-100">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-sand-500">СенСай SPA</h1>
          
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('programs')} className="text-sand-600 hover:text-sand-500 transition-colors">Программы</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sand-600 hover:text-sand-500 transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sand-600 hover:text-sand-500 transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sand-600 hover:text-sand-500 transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('order')} className="text-sand-600 hover:text-sand-500 transition-colors">Купить сертификат</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sand-600 hover:text-sand-500 transition-colors">Контакты</button>
          </div>

          <button 
            className="md:hidden p-2 text-sand-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-sand-200 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('programs')} className="text-left text-sand-600 hover:text-sand-500 transition-colors py-2">Программы</button>
              <button onClick={() => scrollToSection('benefits')} className="text-left text-sand-600 hover:text-sand-500 transition-colors py-2">Преимущества</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-sand-600 hover:text-sand-500 transition-colors py-2">Галерея</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-sand-600 hover:text-sand-500 transition-colors py-2">Отзывы</button>
              <button onClick={() => scrollToSection('order')} className="text-left text-sand-600 hover:text-sand-500 transition-colors py-2">Купить сертификат</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left text-sand-600 hover:text-sand-500 transition-colors py-2">Контакты</button>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nature-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sand-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-sand-500 mb-6">
            Подарите моменты<br />истинного релакса
          </h2>
          <p className="text-xl md:text-2xl text-sand-600 mb-8 max-w-2xl mx-auto">
            Подарочные сертификаты на традиционный тайский массаж и SPA-процедуры
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('order')}
            className="bg-sand-400 hover:bg-sand-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Заказать сертификат
          </Button>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center text-sand-500 mb-4 animate-fade-in">
            Наши программы
          </h3>
          <p className="text-center text-sand-600 mb-12 max-w-2xl mx-auto">
            Каждая программа разработана для достижения гармонии тела и разума
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {programs.map((program) => (
                  <div key={program.id} className="w-full flex-shrink-0">
                    <Card className="border-0 shadow-2xl">
                      <div className="grid md:grid-cols-2">
                        <div className="h-80 md:h-auto overflow-hidden">
                          <img 
                            src={program.image} 
                            alt={program.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <CardTitle className="text-3xl font-heading text-sand-500 mb-4">{program.title}</CardTitle>
                          <CardDescription className="text-sand-600 flex items-center gap-4 mb-4 text-lg">
                            <span className="flex items-center gap-2">
                              <Icon name="Clock" size={20} />
                              {program.duration}
                            </span>
                            <span className="text-2xl font-bold text-nature-400">{program.price}</span>
                          </CardDescription>
                          <p className="text-sand-600 text-lg mb-6">{program.description}</p>
                          <Button 
                            onClick={() => scrollToSection('order')}
                            className="bg-sand-400 hover:bg-sand-500 text-white w-full"
                          >
                            Выбрать программу
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            >
              <Icon name="ChevronLeft" size={24} className="text-sand-500" />
            </button>
            
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % programs.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            >
              <Icon name="ChevronRight" size={24} className="text-sand-500" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-sand-400 w-8' : 'bg-sand-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-sand-50 to-nature-50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center text-sand-500 mb-16 animate-fade-in">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-nature-100 rounded-full flex items-center justify-center">
                  <Icon name={benefit.icon as any} size={32} className="text-nature-400" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-sand-500 mb-2">{benefit.title}</h4>
                <p className="text-sand-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center text-sand-500 mb-4 animate-fade-in">
            Атмосфера нашего СПА
          </h3>
          <p className="text-center text-sand-600 mb-12 max-w-2xl mx-auto">
            Погрузитесь в мир спокойствия и гармонии
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                onClick={() => openGallery(index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group animate-scale-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-heading font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-0">
          <div className="relative">
            <img 
              src={galleryImages[currentGalleryImage].url} 
              alt={galleryImages[currentGalleryImage].title}
              className="w-full h-[80vh] object-contain"
            />
            <button 
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            >
              <Icon name="ChevronLeft" size={24} className="text-white" />
            </button>
            <button 
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            >
              <Icon name="ChevronRight" size={24} className="text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-heading">
              {galleryImages[currentGalleryImage].title}
            </div>
            <div className="absolute bottom-4 right-4 text-white/60 text-sm">
              {currentGalleryImage + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-sand-50 to-nature-50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center text-sand-500 mb-16 animate-fade-in">
            Отзывы наших клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-scale-in border-sand-200"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-heading text-sand-500">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sand-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center text-sand-500 mb-4 animate-fade-in">
            Заказать сертификат
          </h3>
          <p className="text-center text-sand-600 mb-12">
            Заполните форму, и мы свяжемся с вами для оформления подарочного сертификата
          </p>
          <Card className="shadow-2xl border-sand-200 animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipientName">Имя получателя</Label>
                    <Input
                      id="recipientName"
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                      required
                      className="border-sand-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipientEmail">Email получателя</Label>
                    <Input
                      id="recipientEmail"
                      type="email"
                      value={formData.recipientEmail}
                      onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                      required
                      className="border-sand-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="senderName">Ваше имя</Label>
                    <Input
                      id="senderName"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      required
                      className="border-sand-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="senderPhone">Ваш телефон</Label>
                    <Input
                      id="senderPhone"
                      type="tel"
                      value={formData.senderPhone}
                      onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                      required
                      className="border-sand-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Выберите программу</Label>
                  <Select value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })} required>
                    <SelectTrigger className="border-sand-300">
                      <SelectValue placeholder="Выберите программу" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.id} value={program.title}>
                          {program.title} - {program.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Пожелание на сертификате (необязательно)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-sand-300"
                    placeholder="Напишите персональное пожелание..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-sand-400 hover:bg-sand-500 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-sand-50 to-nature-50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center text-sand-500 mb-12 animate-fade-in">
            Контакты
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-nature-400" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-sand-500 mb-1">Адрес</h4>
                  <p className="text-sand-600">г. Москва, ул. Примерная, д. 10</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-nature-400" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-sand-500 mb-1">Телефон</h4>
                  <p className="text-sand-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-nature-400" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-sand-500 mb-1">Email</h4>
                  <p className="text-sand-600">info@sensai-spa.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-nature-400" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-sand-500 mb-1">Режим работы</h4>
                  <p className="text-sand-600">Ежедневно с 10:00 до 22:00</p>
                </div>
              </div>
            </div>

            <div className="bg-sand-50 rounded-2xl p-8 flex items-center justify-center animate-scale-in">
              <div className="text-center">
                <Icon name="Gift" size={80} className="text-nature-400 mx-auto mb-4" />
                <p className="text-sand-600 text-lg">
                  Мы находимся в центре города и всегда рады вашему визиту
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sand-500 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold mb-2">СенСай SPA</h2>
          <p className="text-sand-100">Традиционный тайский массаж и SPA-процедуры</p>
          <p className="text-sand-200 text-sm mt-4">© 2024 СенСай SPA. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
