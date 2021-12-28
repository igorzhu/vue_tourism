<template>
    <div class="map">
        <div class="map__inner">
            <img class="map-img" src="@/assets/images/russia-map.png" />
            <img class="boat boat_1" src="@/assets/images/boat.png" />
            <img class="boat boat_2" src="@/assets/images/boat.png" />
            <img class="boat boat_3" src="@/assets/images/boat.png" />
            <img class="boat boat_4" src="@/assets/images/boat.png" />
            <img class="plane plane_1" src="@/assets/images/plane.png" />
            <img class="plane plane_2" src="@/assets/images/plane.png" />
            <img class="plane plane_3" src="@/assets/images/plane.png" />
            <img class="plane plane_4" src="@/assets/images/plane.png" />
            <img class="plane plane_5" src="@/assets/images/plane.png" />
            <img class="plane plane_6" src="@/assets/images/plane.png" />
            <a class="geo-tag geo-tag_blue tag_1" style="top: 45%; left: 12%;" data-zgallery="center" data-src="#belgorod" href="javascript:;" title="Центральный федеральный округ" @click="$emit('geoTagClick')"><span>17</span></a>
            <a class="geo-tag tag_2" style="top: 23%; left: 24%;" data-zgallery="karelia" data-src="#karelia" href="javascript:;" title="Карелия"><span></span></a>
            <a class="geo-tag geo-tag_blue tag_4" style="top: 74%; left: 5.5%;" data-zgallery="sevkav" data-src="#dagestan" href="javascript:;" title="Северо-Кавказский федеральный округ"><span>6</span></a>
            <a class="geo-tag tag_5" style="top: 59%; left: 25%;" data-zgallery="bashkortostan" data-src="#bashkortostan" href="javascript:;" title="Башкортостан"><span></span></a>
            <a class="geo-tag tag_6" style="top: 67%; left: 30%;" data-zgallery="kurgan" data-src="#kurgan" href="javascript:;" title="Курганская область"><span></span></a>
            <a class="geo-tag tag_7" style="top: 83%; left: 46%;" data-zgallery="altai" data-src="#altai" href="javascript:;" title="Алтай"><span></span></a>
            <a class="geo-tag tag_8" style="top: 84%; left: 64%;" data-zgallery="buryat" data-src="#buryat" href="javascript:;" title="Бурятия"><span></span></a>
            <a class="region-tag"  data-zgallery="center" data-src="#bryansk" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#vladimir" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#voronezh" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#ivanovo" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#kaluga" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#kostroma" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#kursk" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#lipetsk" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#mosreg" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#orel" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#ryazan" href="javascript:;" @click="$emit('geoTagClick')"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#smolensk" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#tambov" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#tver" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#tula" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="center" data-src="#yaroslavl" href="javascript:;"></a>
            <a class="geo-tag tag_55" style="top: 44%; left: 14%;" data-zgallery="moscow" data-src="#moscow" href="javascript:;" title="Москва"><span></span></a>
            <a class="geo-tag tag_31" style="top: 42%; left: 35%;" data-zgallery="komi" data-src="#komi" href="javascript:;" title="Коми"><span></span></a>
            <a class="geo-tag tag_32" style="top: 33%; left: 27%;" data-zgallery="arkhangelsk" data-src="#arkhangelsk" href="javascript:;" title="Архангельская область"><span></span></a>
            <a class="geo-tag tag_33" style="top: 35%; left: 24%;" data-zgallery="vologda" data-src="#vologda" href="javascript:;" title="Вологодская область"><span></span></a>
            <geo-tag class="tag_34" style="top: 21%; left: 7.5%;" data-zgallery="kaliningrad" data-src="#kaliningrad" title="Калининградская область"></geo-tag>
            <!--a class="geo-tag tag_34" style="top: 21%; left: 7.5%;" data-zgallery="kaliningrad" data-src="#kaliningrad" href="javascript:;" title="Калининградская область" @click="$emit('geoTagClick', 'Калининград')"><span></span></a-->
            <a class="geo-tag tag_35" style="top: 26%; left: 20%;" data-zgallery="leningrad" data-src="#leningrad" href="javascript:;" title="Ленинградская область" @click="$emit('geoTagClick')"><span></span></a>
            <a class="geo-tag tag_36" style="top: 21%; left: 27%;" data-zgallery="murmansk" data-src="#murmansk" href="javascript:;" title="Мурманская область"><span></span></a>
            <a class="geo-tag tag_37" style="top: 33%; left: 18%;" data-zgallery="novgorod" data-src="#novgorod" href="javascript:;" title="Новгородская область" @click="$emit('geoTagClick')"><span></span></a>
            <a class="geo-tag tag_38" style="top: 26%; left: 17%;" data-zgallery="spb" data-src="#spb" href="javascript:;" title="Санкт-Петербург"><span></span></a>
            <a class="geo-tag tag_39" style="top: 29%; left: 14%;" data-zgallery="pskov" data-src="#pskov" href="javascript:;" title="Псковская область"><span></span></a>
            <a class="geo-tag tag_40" style="top: 34%; left: 33%;" data-zgallery="nenets" data-src="#nenets" href="javascript:;" title="Ненецкий автономный округ"><span></span></a>
            <a class="geo-tag tag_3" style="top: 59%; left: 3%;" data-zgallery="adygeya" data-src="#adygeya" href="javascript:;" title="Адыгея"><span></span></a>
            <a class="geo-tag tag_60" style="top: 65%; left: 8%;" data-zgallery="kalmykia" data-src="#kalmykia" href="javascript:;" title="Калмыкия"><span></span></a>
            <router-link to="/?page=krasnodar" class="geo-tag tag_61" style="top: 56%; left: 5%;" data-zgallery="krasnodar" data-src="#krasnodar" href="javascript:;" title="Краснодарский край" @click="$emit('geoTagClick')"><span></span></router-link>
            <a class="geo-tag tag_63" style="top: 64%; left: 10%;" data-zgallery="astrakhan" data-src="#astrakhan" href="javascript:;" title="Астраханская область"><span></span></a>
            <a class="geo-tag tag_64" style="top: 59%; left: 12%;" data-zgallery="volgograd" data-src="#volgograd" href="javascript:;" title="Волгоградская область"><span></span></a>
            <a class="geo-tag tag_65" style="top: 56%; left: 9.5%;" data-zgallery="rostov" data-src="#rostov" href="javascript:;" title="Ростовская область"><span></span></a>
            <a class="geo-tag tag_40" style="top: 45%; left: 2%;" data-zgallery="crimea" data-src="#crimea" href="javascript:;" title="Крым"><span></span></a>
            <a class="geo-tag tag_54" style="top: 51%; left: 1%;" data-zgallery="sevastopol" data-src="#sevastopol" href="javascript:;" title="Севастополь"><span></span></a>
            <a class="region-tag"  data-zgallery="sevkav" data-src="#ingushetia" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="sevkav" data-src="#kabardino" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="sevkav" data-src="#karachaevo" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="sevkav" data-src="#ossetia" href="javascript:;"></a>
            <a class="region-tag"  data-zgallery="sevkav" data-src="#chechen" href="javascript:;"></a>
            <a class="geo-tag tag_70" style="top: 64%; left: 6%;" data-zgallery="stavropol" data-src="#stavropol" href="javascript:;" title="Ставропольский край"><span></span></a>
            <a class="geo-tag tag_41" style="top: 50%; left: 28%;" data-zgallery="mariel" data-src="#mariel" href="javascript:;" title="Марий Эл"><span></span></a>
            <a class="geo-tag tag_42" style="top: 47%; left: 23%;" data-zgallery="mordovia" data-src="#mordovia" href="javascript:;" title="Мордовия"><span></span></a>
            <a class="geo-tag tag_43" style="top: 47%; left: 25%;" data-zgallery="chuvashia" data-src="#chuvashia" href="javascript:;" title="Чувашия"><span></span></a>
            <a class="geo-tag tag_44" style="top: 53%; left: 26%;" data-zgallery="tatarstan" data-src="#tatarstan" href="javascript:;" title="Татарстан"><span></span></a>
            <a class="geo-tag tag_45" style="top: 48%; left: 30%;" data-zgallery="udmurtia" data-src="#udmurtia" href="javascript:;" title="Удмуртия"><span></span></a>
            <a class="geo-tag tag_46" style="top: 48%; left: 32%;" data-zgallery="perm" data-src="#perm" href="javascript:;" title="Пермский край"><span></span></a>
            <a class="geo-tag tag_47" style="top: 41%; left: 28%;" data-zgallery="kirov" data-src="#kirov" href="javascript:;" title="Кировская область"><span></span></a>
            <a class="geo-tag tag_47" style="top: 39%; left: 26%;" data-zgallery="nizhegorodskaya" data-src="#nizhegorodskaya" href="javascript:;" title="Нижегородская область"><span></span></a>
            <a class="geo-tag tag_48" style="top: 67%; left: 22%;" data-zgallery="orenburg" data-src="#orenburg" href="javascript:;" title="Оренбургская область"><span></span></a>
            <a class="geo-tag tag_49" style="top: 52%; left: 16%;" data-zgallery="penza" data-src="#penza" href="javascript:;" title="Пензенская область"><span></span></a>
            <a class="geo-tag tag_50" style="top: 59%; left: 20%;" data-zgallery="samara" data-src="#samara" href="javascript:;" title="Самарская область"><span></span></a>
            <a class="geo-tag tag_51" style="top: 59%; left: 16%;" data-zgallery="saratov" data-src="#saratov" href="javascript:;" title="Саратовская область"><span></span></a>
            <a class="geo-tag tag_52" style="top: 55%; left: 18%;" data-zgallery="ulyanovsk" data-src="#ulyanovsk" href="javascript:;" title="Ульяновская область"><span></span></a>
            <a class="geo-tag tag_26" style="top: 55%; left: 32%;" data-zgallery="sverdlovsk" data-src="#sverdlovsk" href="javascript:;" title="Свердловская область"><span></span></a>
            <a class="geo-tag tag_27" style="top: 62%; left: 35%;" data-zgallery="tyumen" data-src="#tyumen" href="javascript:;" title="Тюменская область"><span></span></a>
            <a class="geo-tag tag_28" style="top: 64%; left: 27%;" data-zgallery="chelyabinsk" data-src="#chelyabinsk" href="javascript:;" title="Челябинская область"><span></span></a>
            <a class="geo-tag tag_29" style="top: 54%; left: 39%;" data-zgallery="khanty" data-src="#khanty" href="javascript:;" title="Ханты-Мансийский АО — Югра"><span></span></a>
            <a class="geo-tag tag_30" style="top: 42%; left: 44%;" data-zgallery="yamal" data-src="#yamal" href="javascript:;" title="Ямало-Ненецкий АО"><span></span></a>
            <a class="geo-tag tag_9" style="top: 86%; left: 51%;" data-zgallery="tyva" data-src="#tyva" href="javascript:;" title="Тыва / Тува"><span></span></a>
            <a class="geo-tag tag_10" style="top: 75%; left: 49%;" data-zgallery="khakassia" data-src="#khakassia" href="javascript:;" title="Хакасия"><span></span></a>
            <a class="geo-tag tag_11" style="top: 81%; left: 40%;" data-zgallery="altaireg" data-src="#altaireg" href="javascript:;" title="Алтайский край"><span></span></a>
            <a class="geo-tag tag_12" style="top: 57%; left: 51%;" data-zgallery="krasnoyarsk" data-src="#krasnoyarsk" href="javascript:;" title="Красноярский край"><span></span></a>
            <a class="geo-tag tag_13" style="top: 71%; left: 56%;" data-zgallery="irkutsk" data-src="#irkutsk" href="javascript:;" title="Иркутская область"><span></span></a>
            <a class="geo-tag tag_14" style="top: 70%; left: 46%;" data-zgallery="kemerovo" data-src="#kemerovo" href="javascript:;" title="Кемеровская область / Кузбаc"><span></span></a>
            <a class="geo-tag tag_15" style="top: 70%; left: 39%;" data-zgallery="novosibirsk" data-src="#novosibirsk" href="javascript:;" title="Новосибирская область"><span></span></a>
            <a class="geo-tag tag_16" style="top: 71%; left: 35%;" data-zgallery="omsk" data-src="#omsk" href="javascript:;" title="Омская область"><span></span></a>
            <a class="geo-tag tag_17" style="top: 60%; left: 42%;" data-zgallery="tomsk" data-src="#tomsk" href="javascript:;" title="Томская область"><span></span></a>
            <a class="geo-tag tag_18" style="top: 54%; left: 64%;" data-zgallery="yakutia" data-src="#yakutia" href="javascript:;" title="Саха (Якутия)"><span></span></a>
            <a class="geo-tag tag_19" style="top: 84%; left: 68%;" data-zgallery="zabaykalsky" data-src="#zabaykalsky" href="javascript:;" title="Забайкалье"><span></span></a>
            <a class="geo-tag tag_20" style="top: 43%; left: 95%;" data-zgallery="kamchatka" data-src="#kamchatka" href="javascript:;" title="Камчатский край"><span></span></a>
            <a class="geo-tag tag_21" style="top: 86%; left: 88%;" data-zgallery="primorskiy" data-src="#primorskiy" href="javascript:;" title="Приморский край"><span></span></a>
            <a class="geo-tag tag_22" style="top: 74%; left: 86%;" data-zgallery="khabarovsk" data-src="#khabarovsk" href="javascript:;" title="Хабаровский край"><span></span></a>
            <a class="geo-tag tag_23" style="top: 70%; left: 78%;" data-zgallery="amur" data-src="#amur" href="javascript:;" title="Амурская область"><span></span></a>
            <a class="geo-tag tag_24" style="top: 42%; left: 85%;" data-zgallery="magadan" data-src="#magadan" href="javascript:;" title="Магаданская область"><span></span></a>
            <a class="geo-tag tag_25" style="top: 70%; left: 91%;" data-zgallery="sakhalin" data-src="#sakhalin" href="javascript:;" title="Сахалинская область"><span></span></a>
            <a class="geo-tag tag_25" style="top: 20%; left: 87%;" data-zgallery="chukotka" data-src="#chukotka" href="javascript:;" title="Чукотский АО"><span></span></a>
        </div>
    </div>
</template>

<script>
    import GeoTag from "./GeoTag";
    export default {
        components: {GeoTag},
        name: "map",
        methods: {
            geoTagClickMethod(){
                return event.target.dataset.src;
            }
        }
    }
</script>

<style>

</style>