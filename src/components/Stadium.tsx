import React from 'react';
import { Link } from 'react-router-dom';

const Stadium: React.FC = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Інфраструктурний проєкт: Новий стадіон</h2>
        <p className="text-gray-600 mb-4">
          Долучіться до створення сучасного регбійного стадіону в Ужгороді для розвитку спорту та місцевої громади.
        </p>
        <Link to="/contact" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 inline-block">
          Зв’язатися
        </Link>
      </div>
    </div>
  );
};

export default Stadium;