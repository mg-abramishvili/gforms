<template>
    <div class="gform">
        <button @click="$parent.closeGForm()" class="close">&times;</button>

        <template v-for="(question, index) in questions">
            <div v-if="selected.question == index" class="gform-question">
                <h2>{{ question.title }}</h2>

                <template v-if="question.type == 'group'">
                    <div v-for="(subquestion, index) in question.subquestions" class="subquestion">
                        <div class="subquestion-title">
                            {{ subquestion.title }}
                        </div>
                        <div class="subquestion-variations">
                            <label v-for="variant in subquestion.variations" class="radio">
                                <input v-model="questions[selected.question].subquestions[index].answer" type="radio" :value="variant">
                                {{ variant }}
                            </label>
                        </div>
                    </div>
                </template>

                <template v-if="question.type == 'single'">
                    <div v-for="variant in question.variations" class="radio">
                        <input v-model="questions[selected.question].answer" type="radio" :id="'sq' + index" :value="variant">
                        <label for="'sq' + index">{{ variant }}</label>
                    </div>
                </template>
            </div>
        </template>

        <button v-if="!selected.question == 0" @click="prevQuestion()">Назад</button>
        <button v-if="questions[selected.question + 1]" @click="nextQuestion()">Далее</button>
    </div>
</template>

<script>
import GForm from './Form.vue'

export default {
    data() {
        return {
            questions: [
                {
                    type: 'group',
                    title: 'Оцените организацию и качество питания',
                    subquestions:[
                        {
                            title: 'вкус блюд',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'разнообразие меню',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'чистота посуды',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'качество обслуживания в столовой',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'скорость обслуживания',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'доброжелательность персонала столовой, буфета',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        }
                    ]
                },
                {
                    type: 'group',
                    title: 'Оцените качество досуга',
                    subquestions:[
                        {
                            title: 'организация досуга',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'возможность заниматься спортом',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'оснащенность мест отдыха',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                    ]
                },
                {
                    type: 'group',
                    title: 'Удовлетворены ли вы возможностью приобретать товары первой необходимости?',
                    subquestions:[
                        {
                            title: 'качество ассортимента магазина/буфета на территории ВЖП',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'возможность приобретать товары за пределами ВЖП',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                    ]
                },
                {
                    type: 'single',
                    title: 'Где вы проживаете?',
                    variations: ['общежитие', 'модуль', 'вагон'],
                    answer: null,
                },
                {
                    type: 'group',
                    title: 'Оцените условия проживания',
                    subquestions:[
                        {
                            title: 'понятность схемы размещения комендантской службы для заселения',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'состояние душевых',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'достаточность технической воды для гигиенических процедур',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'работа системы канализации',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'достаточность мест для сушки одежды',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'состояние сушилок для одежды',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                    ]
                },
                {
                    type: 'group',
                    title: 'Оцените качество связи и доступа к сети Интернет в ВЖП',
                    subquestions:[
                        {
                            title: 'сотовая связь',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'доступ к сети Интернет',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                    ]
                },
                {
                    type: 'group',
                    title: 'Оцените качество медицинского обслуживания на объекте:',
                    subquestions:[
                        {
                            title: 'график работы медицинского пункта',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'скорость оказания медицинской помощи',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'достаточность лекарственных средств',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'качество лечения',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                    ]
                },
                {
                    type: 'group',
                    title: 'Оцените качество и обеспеченность спец. одеждой/обувью/СИЗ',
                    subquestions:[
                        {
                            title: 'качество специальной одежды',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'долговечность специальной одежды',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'удобство специальной одежды',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'качество специальной обуви',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'удобство специальной обуви',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                        {
                            title: 'достаточность «расходных» СИЗ (перчатки/краги, очки, ледоставы и прочее)',
                            variations: [1, 2, 3, 4, 5],
                            answer: 5
                        },
                    ]
                },
                {
                    type: 'group',
                    title: 'Прочее',
                    subquestions:[
                        {
                            title: 'Возникают ли у вас переработки',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                        {
                            title: 'У Вас есть возможность каждый день делать то, что Вы умеете лучше всего?',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                        {
                            title: 'Вы получаете соответствующее признание или похвалу за хорошо сделанную работу',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                        {
                            title: 'Считаете ли Вы, что будете работать в Компании через два года?',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                    ]
                },
                {
                    type: 'group',
                    title: 'Прочее',
                    subquestions:[
                        {
                            title: 'Считаете ли Вы, что в этой компании у Вас есть хорошие возможности профессионального и карьерного роста?',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                        {
                            title: 'Соответствует ли Ваш фактический уровень заработной платы, озвученной при трудоустройстве?',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                        {
                            title: 'Влияет ли на размер заработной платы выработка?',
                            variations: ['Да', 'Нет'],
                            answer: null
                        },
                    ]
                },
            ],

            selected: {
                question: 0,
            }
        }
    },
    methods: {
        closeGForm() {
            document.getElementsByClassName('gform')[0].classList.add('gform-close')

            setTimeout(() => {
                this.views.gform = false
            }, 500)
        },
        prevQuestion() {
            this.selected.question = this.selected.question - 1
        },
        nextQuestion() {
            let currentQuestion = this.questions[this.selected.question]

            if(currentQuestion.type == 'single' && !currentQuestion.answer) {
                return alert('Нужен ответ!')
            }

            this.selected.question = this.selected.question + 1
        }
    },
}
</script>