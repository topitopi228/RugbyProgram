import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Зв’язатися з нами</h2>
        <p className="text-gray-600 mb-4">Готові підтримати регбі? Напишіть нам!</p>
        <div className="mt-4">
          <p className="text-lg">Електронна пошта: rugby.support@gmail.com</p>
          <p className="text-lg">Телефон: +380 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;