#Архитектура CSS классов для SVG icons c заливкой или обводкой 
обного цвета

## Общие положения

Конечно icons должны быть грамотно построены в редакторе чтобы
не было проблем с обводкой или заливкой. В пределах одной группы icons должны
отображаться с использованием только fill или только stroke

Если в пределах группы есть icons которые нужно отображать с помощью stroke
но вся группа отображется при помощи fill то нужно выыделить две подгруппы 
fill и stroke:
* custom-fill ( custom-fill-logo-1, custom-fill-logo-2 ... )
* custom-stroke ( custom-stroke-basket, custom-stroke-section-delimeter ... )

SVG код может каждой icon может применять к себе fill, stroke
или оба этих свойства.

Точнее тег path может иметь атрибуты fill или stroke в зависимости
от содержимого атрибута d тега path.

У SVG icon тегов path может быть несколько

Если содержимое атрибута d представляет собой заливку то к тегу 
path с этим атрибутом d нужно применять атрибут 
fill( для цвета или градиента ) и fill-opacity 

Если обводку - атрибуты stroke( для цвета или градиента ), 
stroke-width( для отображения stroke ),
stroke-opacity

В разметке одина и та же svg icon может иметь разный цвет 
или градиент, которые задаются в разметке классами:
* color-1 ... color-n
* gradient-1 ... gradient-n 

Также в разметке icons могут быть из разных дизайнерских
коллекций поэтому для icons одной коллекции можно задавать 
класс для тега svg в разметке:
* business - класс для коллекции business
* custom
* simple
* tools

Этим классам можно задавать общие свойства стиля которые возможно будут
меняться для всей группы:
* stroke-width - чтобы сравнять тощину icons из разных коллекций
* stroke - для icons из header, footer и blog-list




## Классы стилей
С использованием Stylus.

стиль icon примениется к самому верхнему тегу svg и задаёт
общие параметры для icons
```css
.icon
  display inline-block
  width 20px
  height 20px
```

