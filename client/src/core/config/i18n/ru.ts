export default {
    ra: {
      action: {
        save: 'Сохранить',
        create: 'Создать',
        edit: 'Редактировать',
        delete: 'Удалить',
      },
      page: { 
        create: 'Создание',
        list: 'Список'
      }
    },
    resources: { 
      EmployeePage: { 
        name: 'Сотрудники',
      },
      Employee: { 
        name: 'Сотрудники',
        fields: { 
          firstName: 'Имя',
          lastName: 'Фамилия',
          patronymic: 'Отчетство',
          name: 'ФИО',
          dateOfBirth: 'День рождения',
          adress: 'Адрес проживания',
          email: 'Почта',
          phone: 'Номер телефона',
          employmentDate: 'Дата трудоустройства',
          salary: 'Зарплата',
          roleId: 'Роль',
          positionId: 'Должность',
          scheduleId: 'График работы',
          'role.id': 'Роль',
          'position.id': 'Должность',
          'schedule.id': 'График работы'
        }
      },
      EmployeeRole: { 
        name: 'Роли',
      },
      EmployeePosition: { 
        name: 'Должности',
      },
      EmployeeSchedule: { 
        name: 'Графики работы',
        fields: { 
          type: 'Тип рабочего графика',
          workingDays: 'Рабочие дни'
        }
      }
    },
    employee_page: {
      title: 'Страница для работы с сотрудниками',
      description: 'Создание и работа с данными о сотрудниках, а так же управление над ними',
      apps: { 
        employee: 'Сотрудники'
      },
      tab: { 
        all: { 
          title: 'Все приложения'
        },
        employee: { 
          title: 'Сотрудники'
        },
        dictionaries: { 
          title: 'Справочники'
        }
      },
    },
  };
  