# Cache JavaScript

Cache Javascript - це набір об'єктів та функцій, які застосовують спеціальний паттерн для виклику певних функцій на сторінці. Наприклад, замість того, що б виділяти зайву пам'ять для отримання елементу з DOM, який ви вже отримували раніше, ви можете просто взяти його з кешу. 


## _$
_$ є об'єктом для маніпуляції з DOM-деревом. Завдяки ньому, Ви можете отримати елемент та разом з цим оптимізувати роботу Вашого скрипта. Об'єкт поки не має багато методів, для маніпуляцій з деревом, але має базовий функціонал:

### _$.qs() та _$.qsa()

qs() та qsa() є методами глобального об'єкту _$. Вони є альтернативою для document.querySelector та document.querySelectorAll

#### Тест показав
Тест показав, що використання функцій qs() та решти схожиш значно оптимізує роботу сторінки:
```javascript

for (var i = 0 ; i < 1000000; i++) {
	document.querySelector("#app") // Виконається за 350.7 ms
}

for (var i = 0 ; i < 1000000; i++) {
	_$.qs("#app") // Виконається за 30.9 ms
}

```

### Ще методи

* _$.gbid() - document.getElementById()
* _$.gbclass() - document.getElementsByClassName()
* _$.gbname() - document.getElementsByName()
* _$.gbtag() - document.getElementsByTagName()