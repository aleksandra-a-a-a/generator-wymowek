const excuse = ["Nie mogłem dojść na spotkanie, ponieważ miałem wcześniejsze zobowiązanie z członkiem rodziny królewskiej i protokół dyktował, że nie mogłem anulować ani przełożyć. 👑",
"Spóźniłem się w korku z powodu niespodziewanego pochodu słoni, który blokował drogę. 🐘",
"Nie mogłem złożyć swojego projektu na czas, ponieważ komputer mi się zepsuł i wszystko moje prace zniknęły, a potem musiałem pojechać w odległe miejsce odzyskać dane z backupu. 🗺️",
"Nie mogłem dotrzymać terminu, ponieważ byłem zajęty radzeniem sobie z rodzinnym nagłym wypadkiem, w którym pojawił się długo zaginiony krewny i potrzebował mojej pomocy.🤷‍♀️",
"Nie mogłem wziąć udziału w szkoleniu, ponieważ zostałem wezwany do ławy przysięgłych w ważnej sprawie.",
"Nie skończyłem prezentacji, ponieważ doświadczałem ciężkiej reakcji alergicznej i musiałem zostać przewieziony do szpitala. 🚑 ",
"Nie mogłem dojść na spotkanie, ponieważ musiałem zająć się sprawami osobistymi związanymi z bliskim przyjacielem, który przechodził kryzys egzystencjonalny i potrzebował mojego wsparcia.",
"Nie złożyłem raportu na czas, ponieważ podróżowałem w celu specjalnej misji badawczej, a połączenie internetowe było niestabilne.",
"Nie mogłem skończyć zadania, ponieważ miałem awarię prądu i nie mogłem dostać się do komputera przez kilka godzin.",
"Nie mogłem wziąć udziału w spotkaniu, ponieważ zablokowałem się w windzie z powodu awarii zasilania i zajęło kilka godzin, aby mnie wydobyć.",
"Nie mogę, muszę pilnować lodówki",
"O rany, właśnie przyszedł sąsiad z dołu i mówi, że zalałem mu mieszkanie.",
"Nie mogę, muszę sprawdzić czy wyłączyłem rano żelazko",
"Nie dam rady, muszę przytrzymać tapetę, żeby szczeliny między paskami w salonie nie rozjechały się jeszcze bardziej.",
"Dziś nie, dziś mam randkę z kotem.",
"Nie mogę, mój kanarek ma sraczkę.",
"Jestem odpowiedzialny za pilnowanie tajemniczego skarbu, który jest ukryty w moim domu.",
"Nie mogę, bo muszę pilnować, żeby kot nie zniszczył nowej rośliny, którą kupiłem.",
"Niestety, muszę przesuwać żyrandol, żeby nie zaczął wisieć na krawędzi.",
"Nie mogę, bo muszę doglądać, żeby zapiekanka się nie przypaliła.",
"Nie mogę Ci pomóc, bo muszę pilnować, żeby mój kaktus się nie przesuszył.",
"Nie mogę, bo muszę pilnować, żeby mój hamak się nie przewrócił.",
"Nie mogę Ci pomóc, bo muszę pilnować, żeby moja ryba nie wypłynęła z akwarium.",
"Niestety, właśnie przyszedł mój sąsiad z góry i mówi, że zalałem mu sufit.",
"Niestety spóźniłem się, bo musiałem omijać przeszkodę w postaci koncertu orkiestry strażackiej, która zablokowała drogę.",
"Spóźniłem się, bo musiałem przeskoczyć przez stado kangurów, które zablokowało drogę.",
"Niestety, muszę pilnować, żeby moja tajemnicza kolekcja monet nie zniknęła",
"Muszę uczestniczyć w pogrzebie psa kuzynki mojego brata",
"Nie dotarłem, bo ozon w mojej oponie spowodował flaka",
"Przez przypadek zjadłem kocią karmę zamiast tuńczyka i bardzo źle się czuję",
"Ze mną wszystko w porządku, tylko moja lama zachorowała",
"Mam lepsze rzeczy do roboty",
"Nie mogę, ugryzła mnie kaczka",
]

let newScreen = document.getElementById('container').querySelectorAll("p")
let newButton = document.getElementById('start-btn')

function generate() {
    newButton.textContent = "Poproszę inną!"
    newScreen[0].textContent = ""
    newScreen[1].textContent = "Tu wpisz wymówke "
    newScreen[2].textContent = ""
     for (let i = 0; i < 1; i++) { 
     let randomExcuse = Math.floor(Math.random() * excuse.length)
     newScreen[1].textContent = excuse[randomExcuse]
     }
}
