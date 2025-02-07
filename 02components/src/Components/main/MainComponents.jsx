import './style.css'


export const MusicBand = ({bgColor = 'pink'}) => {
    const groupName = 'The Beatles'

    return (
        <div className={`container ${bgColor}`}>
            <h1>{groupName}</h1>
            <h3>Учасники гурту : John Lennon, Paul McCartney, 
                George Harrison, Ringo Starr.</h3>
            <hr/>
            <div className='albums'>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg/220px-Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"></img>
                    <p>Sgt. Pepper's Lonely Hearts Club Band</p>
                    <p>1967</p>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/TheBeatles68LP.jpg/274px-TheBeatles68LP.jpg"></img>
                    <p>The Beatles (White Album)</p>
                    <p>1968</p>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/4/42/Beatles_-_Abbey_Road.jpg/250px-Beatles_-_Abbey_Road.jpg"></img>
                    <p>Abbey Road</p>
                    <p>1969</p>
                </div>
            </div>
        </div>
    )
}

export const CulinaryRecipe = ({bgColor = 'pink'}) => {
    return (
        <div className={`container ${bgColor}`}>
            <h1>Яєчні роли</h1>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-7.jpg"></img>
                </div>
                <div>
                    <h3>Для тіста:</h3>
                    <ul>
                        <li>240 г (2 чашки) пшеничного борошна + трохи для розкачування</li>
                        <li>60 мл (¼ чашки) крижаної води (за необхідності додати ще 60 мл)</li>
                        <li>1 велике яйце</li>
                        <li>1 чайна ложка солі</li>
                        <li>2 столові ложки кукурудзяного крохмалю (для присипки)</li>
                    </ul>
                    <h3>Для начинки:</h3>
                    <ul>
                        <li>300 г курячого або свинячого фаршу</li>
                        <li>150 г (2 чашки) тонко нашаткованої капусти</li>
                        <li>100 г (¾ чашки) моркви, нарізаної соломкою</li>
                        <li>50 г (½ чашки) проростків квасолі</li>
                        <li>3 зубчики часнику, подрібнені</li>
                        <li>15 г (2 столові ложки) свіжого імбиру, натертого</li>
                        <li>30 мл (2 столові ложки) соєвого соусу</li>
                        <li>15 мл (1 столова ложка) устричного соусу</li>
                        <li>5 мл (1 чайна ложка) кунжутної олії</li>
                        <li>2 зелених цибулі, дрібно нарізаних</li>
                        <li>15 мл (1 столова ложка) рослинної олії (для обсмажування начинки)</li>
                        <li>1 яйце, злегка збите (для склеювання тіста)</li>
                    </ul>
                    <h3>Для смаження:</h3>
                    <ul>
                        <li>500 мл (2 чашки) рослинної олії</li>
                    </ul>
                    <h3>Кількість порцій: 20</h3>
                    <h3>Калорійність: 312 ккал</h3>
                    <h3>Час приготування: 1 година</h3>
                </div>
            </div>
            <hr/>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-2.jpg"/>
                </div>
                <div>
                    <h3>Етап 1:</h3>
                    <h3>Підготовка тіста</h3>
                    <p>1.1 У великій мисці з'єднайте борошно, 60 мл крижаної води, яйце і сіль. Перемішуйте до утворення м'якого липкого тіста. За потреби додайте ще води.</p>
                </div>
            </div>
            <hr/>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-3.jpg"/>
                </div>
                <div>
                    <p>1.2 Викладіть тісто на присипану борошном поверхню і вимішуйте близько 5 хвилин, поки воно не стане гладким і еластичним. Дайте тісту відпочити 30 хвилин. Розділіть тісто на дві частини. Одну частину накрийте плівкою, щоб не засохла. Другу розкачайте в тонкий пласт (близько 3 мм). Наріжте його квадратами 9×9 см, злегка присипте крохмалем і складіть стопкою. Повторіть із тістом, що залишилося.</p>
                </div>
            </div>
            <hr/>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-4.jpg"/>
                </div>
                <div>
                    <h3>Етап 2:</h3>
                    <h3>Приготування начинки</h3>
                    <p>2.1 Влийте в сковороду бульйон і томати, доведіть до слабкого кипіння. Посоліть і поперчіть за смаком. Викладіть розламані листи лазаньї прямо в соус, не накривайте кришкою.</p>
                </div>
            </div>
            <hr/>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-5.jpg"/>
                </div>
                <div>
                    <p>2.2 Додайте капусту, моркву і проростки квасолі. Тушкуйте 3-4 хвилини, поки овочі не стануть м'якими. Всипте зелену цибулю, перемішайте і зніміть з вогню. Дайте начинці злегка охолонути.</p>
                </div>
            </div>
            <hr/>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-6.jpg"/>
                </div>
                <div>
                    <h3>Етап 3:</h3>
                    <h3>Формування та обсмажування ролів</h3>
                    <p>3.1 Розкладіть лист тіста у формі ромба. Викладіть 2 столові ложки начинки в нижню частину. Згорніть нижній кут догори, потім загорніть бічні краї всередину і скачайте рулетом. Змастіть верхній кут збитим яйцем. У глибокій каструлі або фритюрниці розігрійте олію до 180°C. Обсмажуйте роли партіями по 3-4 хвилини, перевертаючи, поки вони не стануть золотистими та хрусткими.</p>
                </div>
            </div>
            <hr/>
            <div className='recipe'>
                <div>
                    <img src="https://kanapulka.com.ua/image/catalog/recipe/homemade-egg-rolls/Homemade-Egg-Rolls-7.jpg"/>
                </div>
                <div>
                    <p>3.2 Викладіть на паперові рушники, щоб прибрати зайву олію.</p>
                </div>
            </div>
        </div>
    )
}

export const ShakespeareBibliography = ({bgColor = 'pink'}) => {
    return (
        <div className={`container ${bgColor}`}>
            <h3>Вільям Шекспір — один з найвідоміших драматургів і поетів в історії літератури.</h3>
            <h2>П'єси</h2>
            <h3>Трагідії</h3>
            <ul>
                <li>Ромео і Джульєтта (Romeo and Juliet)</li>
                <li>Гамлет (Hamlet)</li>
                <li>Отелло (Othello)</li>
                <li>Кінг Лір (King Lear)</li>
                <li>Макбет (Macbeth)</li>
                <li>Антоній і Клеопатра (Antony and Cleopatra)</li>
                <li>Тіт Андронік (Titus Andronicus)</li>
                <li>Коріолан (Coriolanus)</li>
            </ul>
            <h3>Комедії</h3>
            <ul>
                <li>Сон літньої ночі (A Midsummer Night's Dream)</li>
                <li>Ваша милість (Twelfth Night)</li>
                <li>Приборкання норовливої (The Taming of the Shrew)</li>
                <li>Скромна наречена (The Shrew)</li>
                <li>Зимова казка (The Winter's Tale)</li>
                <li>Багато шуму з нічого (Much Ado About Nothing)</li>
                <li>Два вересневих вечори (Twelfth Night)</li>
                <li>Венеційський купець (The Merchant of Venice)</li>
            </ul>
            <h3>Історичні драми</h3>
            <ul>
                <li>Генріх IV, частина 1 (Henry IV, Part 1)</li>
                <li>Генріх IV, частина 2 (Henry IV, Part 2)</li>
                <li>Генріх V (Henry V)</li>
                <li>Річард III (Richard III)</li>
                <li>Титус Андронік (Titus Andronicus)</li>
            </ul>
            <h2>Поезії</h2>
            <ul>
                <li>Сонети: Шекспір написав 154 сонети, які охоплюють теми кохання, часу і краси.</li>
                <li>Довгі поеми:</li>
                <ul>
                    <li>Волшебная звада (Venus and Adonis)</li>
                    <li>Сон Прощальний (The Rape of Lucrece)</li>
                </ul>
            </ul>
            <h2>Інші роботи</h2>
            <p>Переклади та адаптації: Шекспір також адаптував різні сюжетні лінії з античної літератури і історії у свої п'єси.</p>
        </div>
    )
}

export const Movie = ({bgColor = 'pink'}) => {
    return (
        <div className={`container ${bgColor}`}>
            <h1>Interstellar</h1>
            <img src='https://m.media-amazon.com/images/I/91vIHsL-zjL.jpg'></img>
            <p>Режисер : Christopher Nolan</p>
            <p>Кіностудія : Syncopy/ Warner Bros. Pictures</p>
            <h2>Сюжет</h2>
            <p>Фільм розповідає про групу астронавтів, які вирушають у міжзоряну подорож через червоточину в пошуках нового дому для людства, адже Земля стає непридатною для життя через екологічну катастрофу.</p>
            <h2>Основні актори</h2>
            <ul>
                <li>Метью МакКонахі (Matthew McConaughey) в ролі Купера</li>
                <li>Енн Хетавей (Anne Hathaway) в ролі Амелії Бранд</li>
                <li>Джessica Chastain в ролі Мерф</li>
                <li>Майкл Кейн (Michael Caine) в ролі професора Бранда</li>
            </ul>
        </div>
    )
}

export const CurrentTime = ({bgColor = 'pink'}) => {
    const today = new Date()

    return (
        <div className={`container ${bgColor}`}>
            <h1>{today.getDate().toString().padStart(2, '0')}.
                {(today.getMonth() + 1).toString().padStart(2, '0')}.
                {today.getFullYear()} {today.getHours().toString().padStart(2, '0')}:
                {today.getMinutes().toString().padStart(2, '0')}:
                {today.getSeconds().toString().padStart(2, '0')}
            </h1>
        </div>
    )
}

export const Pet = ({bgColor = 'pink'}) => {
    return (
        <div className={`container ${bgColor}`}>
            <p>Домашні кішки (Felis catus) походять від диких котів, які жили в Єгипті понад 4 тисячі років тому. Люди почали їх одомашнювати для контролю чисельності гризунів.</p>
            <p>Кішки — м'ясоїдні тварини. Їхній раціон має містити тваринні білки, оскільки вони не можуть безпосередньо перетворювати рослинні білки на енергію так ефективно, як деякі інші тварини.</p>
            <p>Кішки мають 32 м'язи, які контролюють їх вуха. Це дозволяє їм чути звуки з різних напрямків.</p>
            <p>Зір кішок адаптоване до низького освітлення, тож вони можуть бачити в темряві в 6-8 разів краще, ніж люди.</p>
        </div>
    )
}