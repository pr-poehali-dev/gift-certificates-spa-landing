import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const { toast } = useToast();

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-sand-100">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-sand-500">СенСай SPA</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('programs')} className="text-sand-600 hover:text-sand-500 transition-colors">Программы</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sand-600 hover:text-sand-500 transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sand-600 hover:text-sand-500 transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('order')} className="text-sand-600 hover:text-sand-500 transition-colors">Купить сертификат</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sand-600 hover:text-sand-500 transition-colors">Контакты</button>
          </div>
        </nav>
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
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.id} 
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in border-sand-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-sand-500">{program.title}</CardTitle>
                  <CardDescription className="text-sand-600 flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {program.duration}
                    </span>
                    <span className="text-xl font-bold text-nature-400">{program.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sand-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
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

      <section id="testimonials" className="py-20 px-4 bg-white">
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

      <section id="order" className="py-20 px-4 bg-gradient-to-b from-nature-50 to-sand-100">
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

      <section id="contacts" className="py-20 px-4 bg-white">
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
