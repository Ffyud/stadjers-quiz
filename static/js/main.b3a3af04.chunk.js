(this["webpackJsonpstadjers-quiz"]=this["webpackJsonpstadjers-quiz"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(1),o=t.n(r),i=t(7),d=t.n(i),s=(t(13),t(2)),c=t(3),l=t(5),u=t(4),h=(t(14),[{id:0,vraag:"Waar is dit gebouw?",antwoorden:["Bij de Gorechtkade","Aan het Linneausplein","Aan het Damsterdiep","Bij het Pioenpark"],correct:1,niveau:3},{id:1,vraag:"Welk gebouw is dit?",antwoorden:["Het gemeentehuis","Het Oude Groninger Museum","Het Stadskantoor","Het provinciehuis"],correct:3,niveau:2},{id:2,vraag:"Welk gebouw is dit?",antwoorden:["De Stadsschouwburg","Het Grand Theatre","Het Prinsentheater","Het Noorderpoortcollege"],correct:0,niveau:1},{id:3,vraag:"Welk gebouw is dit?",antwoorden:["Het Goudkantoor","Het Academiegebouw","De Universiteitsbibliotheek","Het Gemeentehuis"],correct:1,niveau:1},{id:4,vraag:"Waar staat dit beeld?",antwoorden:["Bij het Martiniziekenhuis","Bij het Harmoniecomplex","Bij het UMCG","Bij het Duisenberggebouw"],correct:2,niveau:2},{id:5,vraag:"Van welke gebouw is deze toren?",antwoorden:["De Sint-Franciscuskerk","Der Aa-kerk","De Sint-Josef Kathedraal","De Nieuwe Kerk"],correct:1,niveau:1},{id:6,vraag:"Welk gasthuis is dit?",antwoorden:["Het Pepergasthuis","Het Sint Anthonygasthuis","Het Sint Martinusgasthuis","Het Pelstergasthuis"],correct:0,niveau:2},{id:7,vraag:"Waar vind je dit bootje?",antwoorden:["In de Hamburgervijver","In de Gorechtvijver","In de Plantsoenvijver","In de Heresingel"],correct:1,niveau:3},{id:8,vraag:"Welke flat staat op de achtergrond?",antwoorden:["De Parelflat","De Duindoornflat","De Saffierflat","De Wielewaalflat"],correct:1,niveau:2},{id:9,vraag:"Waar staat de Sint-Franciscuskerk?",antwoorden:["In de Korrewegwijk","In Paddepoel","In de Oosterparkwijk","In de Wijert"],correct:2,niveau:3},{id:10,vraag:"Waar staat dit beeld?",antwoorden:["Bij het Oosterpark","Bij Park Selwerd","Bij het Roege Bos","Bij het Sterrebos"],correct:0,niveau:2},{id:11,vraag:"Waar staat deze monumentale school?",antwoorden:["Aan het Noorderplantsoen","Aan het Stadspark","Aan het Pioenpark","Aan het Paddepoelpark"],correct:2,niveau:3},{id:12,vraag:"Waar is deze vijver?",antwoorden:["In het Noorderplantsoen","In het Hamburgerpark","In het Stadspark","In het Paddepoelpark"],correct:0,niveau:1},{id:13,vraag:"Welke kerk is dit?",antwoorden:["Der Aa-kerk","De Martinikerk","De Stadskerk","De Nieuwe Kerk"],correct:3,niveau:2},{id:14,vraag:"Welke weg is dit?",antwoorden:["Het Roeierspad","De Kardingermaar","De Paddepoelsterweg","Het Jaagpad"],correct:1,niveau:3},{id:15,vraag:"Waar staan deze flats?",antwoorden:["Aan de Aquamarijnstraat","Aan de Planetenlaan","Aan de Goudlaan","Aan de Wilhelminakade"],correct:0,niveau:2},{id:16,vraag:"Waar staat deze muziekkoepel?",antwoorden:["In het Sterrenbos","In het Stadspark","In het Zuiderpark","In het Noorderplantsoen"],correct:0,niveau:2},{id:17,vraag:"Wat is dat grote gebouw?",antwoorden:["Het gemeentehuis","Het stadshuis","Het provinciehuis","Het Goudkantoor"],correct:1,niveau:1}]),j={foto0:t.p+"static/media/0.359cc080.JPG",foto1:t.p+"static/media/1.9cc4b294.JPG",foto2:t.p+"static/media/2.72aacefa.JPG",foto3:t.p+"static/media/3.099096ea.JPG",foto4:t.p+"static/media/4.58a409b4.JPG",foto5:t.p+"static/media/5.23e9c207.JPG",foto6:t.p+"static/media/6.89c085ec.JPG",foto7:t.p+"static/media/7.30f46b7e.JPG",foto8:t.p+"static/media/8.3bdbb789.JPG",foto9:t.p+"static/media/9.99b0d23c.JPG",foto10:t.p+"static/media/10.d554736d.JPG",foto11:t.p+"static/media/11.c61ba519.JPG",foto12:t.p+"static/media/12.45f82c69.JPG",foto13:t.p+"static/media/13.40df3455.JPG",foto14:t.p+"static/media/14.96d016f0.JPG",foto15:t.p+"static/media/15.39c54ec7.JPG",foto16:t.p+"static/media/16.192314c5.JPG",foto17:t.p+"static/media/17.be0929c5.JPG"},v=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).isGeladen=function(){e.setState({imgLoaded:!0})},e.kiesAntwoord=function(a){e.props.antwoordGekozen(a)},e.state={imgLoaded:!1},e}return Object(c.a)(t,[{key:"geefFoto",value:function(e){return j["foto"+e]}},{key:"toonNiveau",value:function(e){switch(e){case 1:var a="makkelijk";break;case 2:a="gemiddeld";break;case 3:a="moeilijk"}return a}},{key:"render",value:function(){var e=this.props.vraagData;return Object(n.jsxs)("div",{className:"vraagKader",children:[Object(n.jsx)("div",{className:"niveauBadge "+this.toonNiveau(e.niveau),children:this.toonNiveau(e.niveau)}),Object(n.jsxs)("div",{className:"vraagOpties",children:[Object(n.jsx)("div",{className:"vraag",children:e.vraag}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{"aria-label":e.antwoorden[0],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"0",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"1"}),Object(n.jsx)("span",{children:e.antwoorden[0]})]}),Object(n.jsxs)("li",{"aria-label":e.antwoorden[1],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"1",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"2"}),Object(n.jsx)("span",{children:e.antwoorden[1]})]}),Object(n.jsxs)("li",{"aria-label":e.antwoorden[2],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"2",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"3"}),Object(n.jsx)("span",{children:e.antwoorden[2]})]}),Object(n.jsxs)("li",{"aria-label":e.antwoorden[3],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"3",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"4"}),Object(n.jsx)("span",{children:e.antwoorden[3]})]})]})]}),this.state.imgLoaded?null:Object(n.jsx)("div",{className:"imgPlaceholder"}),Object(n.jsx)("img",{alt:"derk!",style:this.state.imgLoaded?{}:{display:"none"},onLoad:this.isGeladen,src:this.geefFoto(e.id)})]},e.id)}}]),t}(r.Component),g=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.call(this)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("Afgerond. We hebben antwoorden hoor: "+this.props.antwoorden)}},{key:"valideerAntwoord",value:function(e,a){var t=this.props.antwoorden[e],n=!1;return parseInt(Number(t))===a&&(n=!0),n}},{key:"render",value:function(){var e=this;this.props.antwoorden;return Object(n.jsxs)("div",{className:"afronding",children:[Object(n.jsxs)("div",{className:"afrondingText",children:[Object(n.jsx)("h1",{children:"Je bent klaar!"}),"Bekijk hieronder je antwoorden."]}),Object(n.jsx)("div",{className:"afrondingText",children:Object(n.jsx)("ul",{className:"afrondingResultaten",children:h.map((function(a,t){var r=a.id+1;return!0===e.valideerAntwoord(a.id,a.correct)?Object(n.jsxs)("li",{className:"goud",children:[r,".",Object(n.jsx)("span",{className:"correct",children:a.antwoorden[a.correct]})]}):Object(n.jsxs)("li",{className:"fout",children:[r,".",Object(n.jsx)("span",{className:"incorrect",children:a.antwoorden[e.props.antwoorden[a.id]]}),Object(n.jsx)("span",{className:"correct",children:a.antwoorden[a.correct]})]})}))})})]})}}]),t}(r.Component),b=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).antwoordGekozen=function(e){var a=e.currentTarget.dataset.vraag,t=e.currentTarget.dataset.antwoord;n.setState({vragenBeantwoord:n.state.vragenBeantwoord.concat(a),antwoorden:n.state.antwoorden.concat(t),vraagMeeBezig:n.state.vraagMeeBezig+1})},n.state={vraagMeeBezig:0,aantalVragen:h.length-1,vragenBeantwoord:[],antwoorden:[],afgerond:!1},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.aantalVragen)}},{key:"componentDidUpdate",value:function(){this.state.vraagMeeBezig>this.state.aantalVragen&!1===this.state.afgerond&&(console.log("Alle vragen gehad!"),this.setState({afgerond:!0}))}},{key:"render",value:function(){var e=this;return!1===this.state.afgerond?Object(n.jsx)("div",{children:h.filter((function(a){return a.id===e.state.vraagMeeBezig})).map((function(a,t){return Object(n.jsx)(v,{antwoordGekozen:e.antwoordGekozen,vraagData:a},e.state.vraagMeeBezig)}))}):Object(n.jsx)(g,{antwoorden:this.state.antwoorden})}}]),t}(r.Component),p=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).vanStart=function(e){n.setState({vanStart:!0})},n.state={vanStart:!1},n}return Object(c.a)(t,[{key:"render",value:function(){return!0===this.state.vanStart?Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{})}):Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsxs)("div",{className:"introText",children:[Object(n.jsx)("h1",{children:"Welkom bij de grote Stadjers Quiz!"}),"Beantwoord 100 vragen over de Stad Groningen en laat zien dat jij de ultieme kenner bent."]}),Object(n.jsx)("div",{className:"introStart",onClick:this.vanStart,children:"START"})]})})}}]),t}(r.Component);d.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b3a3af04.chunk.js.map