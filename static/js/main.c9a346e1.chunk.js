(this["webpackJsonpstadjers-quiz"]=this["webpackJsonpstadjers-quiz"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),i=a(7),s=a.n(i),c=(a(13),a(2)),d=a(3),l=a(5),j=a(4),u=(a(14),[{id:0,vraag:"Waar is dit gebouw?",antwoorden:["Bij de Gorechtkade","Aan het Linneausplein","Aan het Damsterdiep","Bij het Pioenpark"],correct:1},{id:1,vraag:"Welk gebouw is dit?",antwoorden:["Het gemeentehuis","Het Oude Groninger Museum","Het Stadskantoor","Het provinciehuis"],correct:3},{id:2,vraag:"Welk gebouw is dit?",antwoorden:["De Stadsschouwburg","Het Grand Theatre","Het Prinsentheater","Het Noorderpoortcollege"],correct:0},{id:3,vraag:"Welk gebouw is dit?",antwoorden:["Het Goudkantoor","Het Academiegebouw","De Universiteitsbibliotheek","Het Gemeentehuis"],correct:1},{id:4,vraag:"Waar staat dit beeld?",antwoorden:["Bij het Martiniziekenhuis","Bij het Harmoniecomplex","Bij het UMCG","Bij het Duisenberggebouw"],correct:2},{id:5,vraag:"Van welke gebouw is deze toren?",antwoorden:["De Sint-Franciscuskerk","De A-kerk","De Sint-Josef Kathedraal","De Nieuwe Kerk"],correct:1},{id:6,vraag:"Welk gasthuis is dit?",antwoorden:["Het Pepergasthuis","Het Sint Anthonygasthuis","Het Sint Martinusgasthuis","Het Pelstergasthuis"],correct:0}]),h={foto0:a.p+"static/media/0.359cc080.JPG",foto1:a.p+"static/media/1.9cc4b294.JPG",foto2:a.p+"static/media/2.72aacefa.JPG",foto3:a.p+"static/media/3.099096ea.JPG",foto4:a.p+"static/media/4.58a409b4.JPG",foto5:a.p+"static/media/5.23e9c207.JPG"},b=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).isGeladen=function(){e.setState({imgLoaded:!0})},e.kiesAntwoord=function(t){e.props.antwoordGekozen(t)},e.state={imgLoaded:!1},e}return Object(d.a)(a,[{key:"geefFoto",value:function(e){return h["foto"+e]}},{key:"render",value:function(){var e=this.props.vraagData;return Object(n.jsxs)("div",{className:"vraagKader",children:[Object(n.jsxs)("div",{className:"vraagOpties",children:[Object(n.jsx)("div",{className:"vraag",children:e.vraag}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{"aria-label":e.antwoorden[0],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"0",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"1"}),Object(n.jsx)("span",{children:e.antwoorden[0]})]}),Object(n.jsxs)("li",{"aria-label":e.antwoorden[1],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"1",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"2"}),Object(n.jsx)("span",{children:e.antwoorden[1]})]}),Object(n.jsxs)("li",{"aria-label":e.antwoorden[2],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"2",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"3"}),Object(n.jsx)("span",{children:e.antwoorden[2]})]}),Object(n.jsxs)("li",{"aria-label":e.antwoorden[3],onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"3",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"4"}),Object(n.jsx)("span",{children:e.antwoorden[3]})]})]})]}),this.state.imgLoaded?null:Object(n.jsx)("div",{className:"imgPlaceholder"}),Object(n.jsx)("img",{alt:"derk!",style:this.state.imgLoaded?{}:{display:"none"},onLoad:this.isGeladen,src:this.geefFoto(e.id)})]},e.id)}}]),a}(r.Component),g=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.call(this)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log("Afgerond. We hebben antwoorden hoor: "+this.props.antwoorden)}},{key:"valideerAntwoord",value:function(e,t){var a=this.props.antwoorden[e],n=!1;return parseInt(Number(a))===t&&(n=!0),n}},{key:"render",value:function(){var e=this;this.props.antwoorden;return Object(n.jsx)("div",{className:"afronding",children:Object(n.jsxs)("div",{className:"afrondingText",children:[Object(n.jsx)("h1",{children:"Je bent klaar!"}),Object(n.jsx)("ul",{className:"afrondingResultaten",children:u.map((function(t,a){var r=t.id+1;return!0===e.valideerAntwoord(t.id,t.correct)?Object(n.jsxs)("li",{className:"goud",children:[r,".",Object(n.jsx)("span",{className:"correct",children:t.antwoorden[t.correct]})]}):Object(n.jsxs)("li",{className:"fout",children:[r,".",Object(n.jsx)("span",{className:"incorrect",children:t.antwoorden[e.props.antwoorden[t.id]]}),Object(n.jsx)("span",{className:"correct",children:t.antwoorden[t.correct]})]})}))})]})})}}]),a}(r.Component),v=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).antwoordGekozen=function(e){var t=e.currentTarget.dataset.vraag,a=e.currentTarget.dataset.antwoord;n.setState({vragenBeantwoord:n.state.vragenBeantwoord.concat(t),antwoorden:n.state.antwoorden.concat(a),vraagMeeBezig:n.state.vraagMeeBezig+1})},n.state={vraagMeeBezig:0,aantalVragen:u.length-1,vragenBeantwoord:[],antwoorden:[],afgerond:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.state.aantalVragen)}},{key:"componentDidUpdate",value:function(){this.state.vraagMeeBezig>this.state.aantalVragen&!1===this.state.afgerond&&(console.log("Alle vragen gehad!"),this.setState({afgerond:!0}))}},{key:"render",value:function(){var e=this;return!1===this.state.afgerond?Object(n.jsx)("div",{children:u.filter((function(t){return t.id===e.state.vraagMeeBezig})).map((function(t,a){return Object(n.jsx)(b,{antwoordGekozen:e.antwoordGekozen,vraagData:t},e.state.vraagMeeBezig)}))}):Object(n.jsx)(g,{antwoorden:this.state.antwoorden})}}]),a}(r.Component),w=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).vanStart=function(e){n.setState({vanStart:!0})},n.state={vanStart:!1},n}return Object(d.a)(a,[{key:"render",value:function(){return!0===this.state.vanStart?Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})}):Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsxs)("div",{className:"introText",children:[Object(n.jsx)("h1",{children:"Welkom bij de grote Stadjers Quiz!"}),"Beantwoord 100 vragen over de Stad Groningen en laat zien dat jij de ultieme kenner bent."]}),Object(n.jsx)("div",{className:"introStart",onClick:this.vanStart,children:"START"})]})})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c9a346e1.chunk.js.map