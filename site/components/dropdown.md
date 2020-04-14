---
title: Dropdown
---

# Dropdown

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--contained" data-action="dropdown#toggle">Dropdown button</button>
  <div class="dropdown__menu">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--contained" data-action="dropdown#toggle">Menu align right</button>
  <div class="dropdown__menu dropdown__menu--right">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--contained" data-action="dropdown#toggle">Menu align top</button>
  <div class="dropdown__menu dropdown__menu--top">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--contained" data-action="dropdown#toggle">Menu align top right</button>
  <div class="dropdown__menu dropdown__menu--top dropdown__menu--right">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
{% endexample %}