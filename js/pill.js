// ========== Переменные для "tabo'v" ==========
const headerItem = document.querySelectorAll('.header_item');
const mainContent = document.querySelectorAll('.main_content');



// Перебираем все заголовки табов
for (let item of headerItem) {

    // Вешаем на них click
    item.addEventListener('click', function() {

        // Добавляем всем main__content класс hidden, который скрывает содержимое!
        for (let element of mainContent) {
            element.classList.add('hidden')
        }
        
        headerItem.forEach(element => element.classList.remove('active-tab'));

        item.classList.add('active-tab');
        
        
        // Находим конкретный main__content, который соответствует нажатому заголовку табов
        // и удаляем у него класс hidden, чтобы показать содержимое!
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden')
    })
}
document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden');

