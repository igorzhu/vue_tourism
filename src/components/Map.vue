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
            <router-link to="/gallery?page=belgorod" class="geo-tag geo-tag_blue tag_1" style="top: 45%; left: 12%;"  title="Центральный федеральный округ"><span>17</span></router-link>
            <router-link to="/gallery?page=karelia" class="geo-tag tag_2" style="top: 23%; left: 24%;"  title="Карелия"><span></span></router-link>
            <router-link to="/gallery?page=dagestan" class="geo-tag geo-tag_blue tag_4" style="top: 74%; left: 5.5%;"  href="javascript:;" title="Северо-Кавказский федеральный округ"><span>6</span></router-link>
            <router-link to="/gallery?page=bashkortostan" class="geo-tag tag_5" style="top: 59%; left: 25%;" href="javascript:;" title="Башкортостан"><span></span></router-link>
            <router-link to="/gallery?page=kurgan" class="geo-tag tag_6" style="top: 67%; left: 30%;" data-zgallery="kurgan" title="Курганская область"><span></span></router-link>
            <router-link to="/gallery?page=altai" class="geo-tag tag_7" style="top: 83%; left: 46%;" title="Алтай"><span></span></router-link>
            <router-link to="/gallery?page=buryat" class="geo-tag tag_8" style="top: 84%; left: 64%;" title="Бурятия"><span></span></router-link>
            <router-link to="/gallery?page=bryansk" class="region-tag"  data-zgallery="center"></router-link>
            <router-link to="/gallery?page=vladimir" class="region-tag"></router-link>
            <router-link to="/gallery?page=voronezh" class="region-tag"></router-link>
            <router-link to="/gallery?page=ivanovo" class="region-tag"></router-link>
            <router-link to="/gallery?page=kaluga" class="region-tag"></router-link>
            <router-link to="/gallery?page=kostroma" class="region-tag"></router-link>
            <router-link to="/gallery?page=kursk" class="region-tag"></router-link>
            <router-link to="/gallery?page=lipetsk" class="region-tag"></router-link>
            <router-link to="/gallery?page=mosreg" class="region-tag"></router-link>
            <router-link to="/gallery?page=orel" class="region-tag"></router-link>
            <router-link to="/gallery?page=ryazan" class="region-tag"></router-link>
            <router-link to="/gallery?page=smolensk" class="region-tag"></router-link>
            <router-link to="/gallery?page=tambov" class="region-tag"></router-link>
            <router-link to="/gallery?page=tver" class="region-tag"></router-link>
            <router-link to="/gallery?page=tula" class="region-tag"  data-zgallery="center"></router-link>
            <router-link to="/gallery?page=yaroslavl" class="region-tag"></router-link>
            <router-link to="/gallery?page=moscow" class="geo-tag tag_55" style="top: 44%; left: 14%;"  title="Москва"><span></span></router-link>
            <router-link to="/gallery?page=komi" class="geo-tag tag_31" style="top: 42%; left: 35%;" title="Коми"><span></span></router-link>
            <router-link to="/gallery?page=arkhangelsk" class="geo-tag tag_32" style="top: 33%; left: 27%;" title="Архангельская область"><span></span></router-link>
            <router-link to="/gallery?page=vologda" class="geo-tag tag_33" style="top: 35%; left: 24%;" title="Вологодская область"><span></span></router-link>
            <geo-tag to="/gallery?page=kaliningrad" class="tag_34" style="top: 21%; left: 7.5%;" title="Калининградская область"></geo-tag>
            <!--a class="geo-tag tag_34" style="top: 21%; left: 7.5%;" data-zgallery="kaliningrad" data-src="#kaliningrad" href="javascript:;" title="Калининградская область" @click="$emit('geoTagClick', 'Калининград')"><span></span></a-->
            <router-link to="/gallery?page=leningrad" class="geo-tag tag_35" style="top: 26%; left: 20%;" title="Ленинградская область" @click="$emit('geoTagClick')"><span></span></router-link>
            <router-link to="/gallery?page=murmansk" class="geo-tag tag_36" style="top: 21%; left: 27%;" title="Мурманская область"><span></span></router-link>
            <router-link to="/gallery?page=novgorod" class="geo-tag tag_37" style="top: 33%; left: 18%;"  title="Новгородская область"><span></span></router-link>
            <router-link to="/gallery?page=spb" class="geo-tag tag_38" style="top: 26%; left: 17%;" data-zgallery="spb" data-src="#spb" href="javascript:;" title="Санкт-Петербург"><span></span></router-link>
            <router-link to="/gallery?page=pskov" class="geo-tag tag_39" style="top: 29%; left: 14%;" title="Псковская область"><span></span></router-link>
            <router-link to="/gallery?page=nenets" class="geo-tag tag_40" style="top: 34%; left: 33%;" title="Ненецкий автономный округ"><span></span></router-link>
            <router-link to="/gallery?page=adygeya" class="geo-tag tag_3" style="top: 59%; left: 3%;" title="Адыгея"><span></span></router-link>
            <router-link to="/gallery?page=kalmykia" class="geo-tag tag_60" style="top: 65%; left: 8%;" title="Калмыкия"><span></span></router-link>
            <router-link to="/gallery?page=krasnodar" class="geo-tag tag_61" style="top: 56%; left: 5%;" title="Краснодарский край"><span></span></router-link>
            <router-link to="/gallery?page=astrakhan" class="geo-tag tag_63" style="top: 64%; left: 10%;" title="Астраханская область"><span></span></router-link>
            <router-link to="/gallery?page=volgograd" class="geo-tag tag_64" style="top: 59%; left: 12%;" title="Волгоградская область"><span></span></router-link>
            <router-link to="/gallery?page=rostov" class="geo-tag tag_65" style="top: 56%; left: 9.5%;" title="Ростовская область"><span></span></router-link>
            <router-link to="/gallery?page=crimea" class="geo-tag tag_40" style="top: 45%; left: 2%;" title="Крым"><span></span></router-link>
            <router-link to="/gallery?page=sevastopol" class="geo-tag tag_54" style="top: 51%; left: 1%;" title="Севастополь"><span></span></router-link>
            <router-link to="/gallery?page=ingushetia" class="region-tag"></router-link>
            <router-link to="/gallery?page=kabardino" class="region-tag"></router-link>
            <router-link to="/gallery?page=karachaevo" class="region-tag"></router-link>
            <router-link to="/gallery?page=ossetia" class="region-tag"></router-link>
            <router-link to="/gallery?page=chechen" class="region-tag"></router-link>
            <router-link to="/gallery?page=stavropol" class="geo-tag tag_70" style="top: 64%; left: 6%;" title="Ставропольский край"><span></span></router-link>
            <router-link to="/gallery?page=mariel" class="geo-tag tag_41" style="top: 50%; left: 28%;" title="Марий Эл"><span></span></router-link>
            <router-link to="/gallery?page=mordovia" class="geo-tag tag_42" style="top: 47%; left: 23%;" title="Мордовия"><span></span></router-link>
            <router-link to="/gallery?page=chuvashia" class="geo-tag tag_43" style="top: 47%; left: 25%;" title="Чувашия"><span></span></router-link>
            <router-link to="/gallery?page=tatarstan" class="geo-tag tag_44" style="top: 53%; left: 26%;" title="Татарстан"><span></span></router-link>
            <router-link to="/gallery?page=udmurtia" class="geo-tag tag_45" style="top: 48%; left: 30%;" title="Удмуртия"><span></span></router-link>
            <router-link to="/gallery?page=perm" class="geo-tag tag_46" style="top: 48%; left: 32%;" title="Пермский край"><span></span></router-link>
            <router-link to="/gallery?page=kirov" class="geo-tag tag_47" style="top: 41%; left: 28%;" title="Кировская область"><span></span></router-link>
            <router-link to="/gallery?page=nizhegorodskaya" class="geo-tag tag_47" style="top: 39%; left: 26%;"  title="Нижегородская область"><span></span></router-link>
            <router-link to="/gallery?page=orenburg" class="geo-tag tag_48" style="top: 67%; left: 22%;" title="Оренбургская область"><span></span></router-link>
            <router-link to="/gallery?page=penza" class="geo-tag tag_49" style="top: 52%; left: 16%;" title="Пензенская область"><span></span></router-link>
            <router-link to="/gallery?page=samara" class="geo-tag tag_50" style="top: 59%; left: 20%;" title="Самарская область"><span></span></router-link>
            <router-link to="/gallery?page=saratov" class="geo-tag tag_51" style="top: 59%; left: 16%;" title="Саратовская область"><span></span></router-link>
            <router-link to="/gallery?page=ulyanovsk" class="geo-tag tag_52" style="top: 55%; left: 18%;" title="Ульяновская область"><span></span></router-link>
            <router-link to="/gallery?page=sverdlovsk" class="geo-tag tag_26" style="top: 55%; left: 32%;" title="Свердловская область"><span></span></router-link>
            <router-link to="/gallery?page=tyumen" class="geo-tag tag_27" style="top: 62%; left: 35%;" title="Тюменская область"><span></span></router-link>
            <router-link to="/gallery?page=chelyabinsk" class="geo-tag tag_28" style="top: 64%; left: 27%;" title="Челябинская область"><span></span></router-link>
            <router-link to="/gallery?page=khanty" class="geo-tag tag_29" style="top: 54%; left: 39%;" title="Ханты-Мансийский АО — Югра"><span></span></router-link>
            <router-link to="/gallery?page=yamal" class="geo-tag tag_30" style="top: 42%; left: 44%;" title="Ямало-Ненецкий АО"><span></span></router-link>
            <router-link to="/gallery?page=tyva" class="geo-tag tag_9" style="top: 86%; left: 51%;" title="Тыва / Тува"><span></span></router-link>
            <router-link to="/gallery?page=khakassia" class="geo-tag tag_10" style="top: 75%; left: 49%;" title="Хакасия"><span></span></router-link>
            <router-link to="/gallery?page=altaireg" class="geo-tag tag_11" style="top: 81%; left: 40%;" title="Алтайский край"><span></span></router-link>
            <router-link to="/gallery?page=krasnoyarsk" class="geo-tag tag_12" style="top: 57%; left: 51%;" title="Красноярский край"><span></span></router-link>
            <router-link to="/gallery?page=irkutsk" class="geo-tag tag_13" style="top: 71%; left: 56%;" title="Иркутская область"><span></span></router-link>
            <router-link to="/gallery?page=kemerovo" class="geo-tag tag_14" style="top: 70%; left: 46%;" title="Кемеровская область / Кузбаc"><span></span></router-link>
            <router-link to="/gallery?page=novosibirsk" class="geo-tag tag_15" style="top: 70%; left: 39%;" title="Новосибирская область"><span></span></router-link>
            <router-link to="/gallery?page=omsk" class="geo-tag tag_16" style="top: 71%; left: 35%;" title="Омская область"><span></span></router-link>
            <router-link to="/gallery?page=tomsk" class="geo-tag tag_17" style="top: 60%; left: 42%;" title="Томская область"><span></span></router-link>
            <router-link to="/gallery?page=yakutia" class="geo-tag tag_18" style="top: 54%; left: 64%;" title="Саха (Якутия)"><span></span></router-link>
            <router-link to="/gallery?page=zabaykalsky" class="geo-tag tag_19" style="top: 84%; left: 68%;" title="Забайкалье"><span></span></router-link>
            <router-link to="/gallery?page=kamchatka" class="geo-tag tag_20" style="top: 43%; left: 95%;" title="Камчатский край"><span></span></router-link>
            <router-link to="/gallery?page=primorskiy" class="geo-tag tag_21" style="top: 86%; left: 88%;" title="Приморский край"><span></span></router-link>
            <router-link to="/gallery?page=khabarovsk" class="geo-tag tag_22" style="top: 74%; left: 86%;" title="Хабаровский край"><span></span></router-link>
            <router-link to="/gallery?page=amur" class="geo-tag tag_23" style="top: 70%; left: 78%;" title="Амурская область"><span></span></router-link>
            <router-link to="/gallery?page=magadan" class="geo-tag tag_24" style="top: 42%; left: 85%;" title="Магаданская область"><span></span></router-link>
            <router-link to="/gallery?page=sakhalin" class="geo-tag tag_25" style="top: 70%; left: 91%;" title="Сахалинская область"><span></span></router-link>
            <router-link to="/gallery?page=chukotka" class="geo-tag tag_25" style="top: 20%; left: 87%;" title="Чукотский АО"><span></span></router-link>
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