<template>
<div>
<div>
<h1>Відправка файлів. Клас "FormData"</h1>
Об'єкт <span class="keyWords">FormData</span> дозволяє створити набір пар ключ / значення і передати їх, використовуючи <span class="keyWords">XMLHttpRequest</span>. 
Об'єкт <span class="keyWords">FormData</span> призначений для передачі даних форм, проте може бути використаний для передачі пар ключ / значення незалежно них. 
Дані передаються в тому ж форматі, як і дані, що передаються методом submit() форми, з встановленої кодуванням  <span class="keyWords">enctype = "multipart / form-data"</span>.
<h1>Створення об'єкта FormData</h1>
Ви можете самостійно створити порожній об'єкт <span class="keyWords">FormData</span>, наповнивши його потім даними, використовуючи метод 
<span class="keyWords">domxref</span>.
</div>
<div>
    Для створення об'єкта FormDatа, що містить дані існуючої форми (<span class="keyWords">form</span>) передайте форму в якості аргументу при створенні об'єкта FormData
</div>
<div>
    Ви так само можете відправляти файли за допомогою FormData. Просто включите <span class="keyWords">input</span> з типом file в форму.
</div>
</div>
</template>
<script>
export default{
    data(){
        return{}
    }
}
</script>
<style scoped>
.keyWords{
    color:#BF33FF;
}
h1{
    text-align:center;
}
div{
    border:5px solid black;
}
</style>