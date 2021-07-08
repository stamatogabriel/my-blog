import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from '../components/Posts';
import SEO from '../components/SEO'
import config from '../../data/config'
import 'minireset.css';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
      
    <!-- Styles ============================= -->
    <style type="text/css">
      .cookieBar {
        background-color: #000000;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 50px;
        padding: 0.5rem 2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: none;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #ffffff;
        z-index: 9999999998;
      }
      .cookieBar .buttons {
        display: -webkit-inline-box;
        margin-left: 2rem;
        cursor: pointer;
      }
      .cookieBar .buttons div:last-child {
        padding: 0px 15px;
        border: 2px solid #ffffff;
        border-radius: 10px;
        margin: 0px 10px;
      }
      .cookieBar p {
        white-space: pre-line;
        font-family: Arial;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
      }
      .cookieBar .buttons div {
        font-family: Arial;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
      }
    
      .cookieModal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        z-index: 9999999999;
      }
      .cookieModal .cookieList {
        margin: auto;
        padding: 50px;
        background-color: #000000;
        color: #ffffff;
        border-radius: 20px;
        min-width: 400px;
        min-height: 380px;
        overflow: auto;
        max-height: 500px;
      }
      .cookieModal .cookieList h2 {
        color: #ffffff;
        font-family: Arial;
        padding: 24px 32px
      }
      .cookieModal .cookieList h3 {
        color: #ffffff;
        font-family: Arial;
        padding: 12px 16px;
        border-top: 1px solid #ffffff;
        margin-top: 10px;
      }
      .cookieModal .cookieList p {
        color: #ffffff;
        font-family: Arial;
      }
      .cookieModal .cookieList span {
        color: #ffffff;
        font-family: Arial;
      }
      .cookieModal .cookieList .buttons {
        margin: 10px;
        justify-content: flex-end;
        display: flex;
        cursor: pointer;
      }
      .cookieModal .cookieList .buttons .save {
        padding: 0px 15px;
        border: 2px solid #ffffff;
        border-radius: 10px;
        font-family: Arial;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
      }
    
      .switch-group {
        height: 100px;
        overflow: auto;
        border: 2px solid #ffffff;
        border-radius: 4px;
        padding: 15px;
      }
      .switch-row {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 14px;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #929398;
        -webkit-transition: .4s;
        transition: .4s;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        top: -3px;
        left: -1px;
        bottom: 4px;
        background-color: #ffffff;
        -webkit-transition: .4s;
        transition: .4s;
      }
      input:checked + .slider {
        background-color: #ffffff;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #ffffff;
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
      }
      input:disabled + .slider {
        opacity: 0.50;
        cursor: not-allowed;
      }
      .slider.round {
        border-radius: 34px;
      }
      .slider.round:before {
        border-radius: 50%;
      }
      
    </style>
    
    
    <!-- HTML ============================= -->
    <div class="cookieModal">
      <div class="cookieList">
        <h2 class="header">Cookies</h2>
    
        <p>Escolha quais tipos de cookies para aceitar. Sua escolha será salva por 1 mês.</p>
    
        
        <h3>Necessários</h3>
        <div class="switch-row">
          <span>Estes cookies não são opcionais. Eles são necessários para funcionamento do site.</span>
          <div class="switch-label">
            <label
              for="needed"
              class="switch"
            >
              <input
                disabled
                type="checkbox"
                id="needed"
                name="needed"
                checked="checked"
              >
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="switch-group">
        
        
        <div class="switch-row">
          <span>taboola_session_id</span>
          <div class="switch-label">
            <span>.taboola.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>MUID</span>
          <div class="switch-label">
            <span>.bing.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>MR</span>
          <div class="switch-label">
            <span>.bat.bing.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_gid</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_gat_UA-158625470-1</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_ga_P9B7WKT4JR</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>li_sugr</span>
          <div class="switch-label">
            <span>.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>lang</span>
          <div class="switch-label">
            <span>.ads.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>bcookie</span>
          <div class="switch-label">
            <span>.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>lidc</span>
          <div class="switch-label">
            <span>.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>UserMatchHistory</span>
          <div class="switch-label">
            <span>.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>AnalyticsSyncHistory</span>
          <div class="switch-label">
            <span>.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_uetsid</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_uetvid</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>t_gid</span>
          <div class="switch-label">
            <span>.taboola.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>mp_1fe06eeadd7468f52aabe7cf2ee50146_mixpanel</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>lang</span>
          <div class="switch-label">
            <span>.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>bscookie</span>
          <div class="switch-label">
            <span>.www.linkedin.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_fbp</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>fr</span>
          <div class="switch-label">
            <span>.facebook.com</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_ga</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>_gat_gtag_UA_158625470_1</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>hgyclh-w19134</span>
          <div class="switch-label">
            <span>.advancedcorretora.com.br</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>AWSALBCORS</span>
          <div class="switch-label">
            <span>ct-socket.huggy.app</span>
          </div>
        </div>
        
        <div class="switch-row">
          <span>U</span>
          <div class="switch-label">
            <span>.adsymptotic.com</span>
          </div>
        </div>
        </div>
    
        <div class="buttons">
          <div class="save"> Salvar </div>
        </div>
      </div>
    </div>
    
    <div class="cookieBar">
      <p>Nós usamos cookies. Se você está de acordo, clique em "Aceitar tudo". Escolha que tipos de cookies guardar em "Configurações".</p>
      <div class="buttons">
        <div class="settings"> Configurações </div>
        <div class="acceptAll"> Aceitar tudo </div>
      </div>
    </div>
    
    
    <!-- Scripts ============================= -->
    <script>
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    function deleteCookie(cname, cvalue, cdomain) {
      console.log("Deleting", cname, cvalue, cdomain);
      document.cookie =
        cname +
        "=" +
        cvalue +
        ";" +
        "expires=Thu, 01 Jan 1970 00:00:00 UTC" +
        ";path=/";
      document.cookie =
        cname +
        "=" +
        cvalue +
        ";" +
        "expires=Thu, 01 Jan 1970 00:00:00 UTC" +
        ";path=/" +
        ";domain=" +
        cdomain;
    }
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function manageCookies() {
      var privacyFlowCatCookies = getCookie("privacyflow_cookies");
      if (privacyFlowCatCookies) {
        var parsedCatCookieList = JSON.parse(privacyFlowCatCookies);
        var parsedCookieList = JSON.parse(allCookiesString);
        var parsedCatCookieObj;
        var parsedCookieObj;
        // Cookies
        for (var j = 0; j < parsedCookieList.length; j++) {
          // Categories
          for (var i = 0; i < parsedCatCookieList.length; i++) {
            if (typeof parsedCatCookieList[i] === "string") {
              console.error("Wrong interface for cookie:", parsedCatCookieList[i]);
            }
            if (!parsedCatCookieList[i].accepted) {
              if (parsedCookieList[j].category === parsedCatCookieList[i].name) {
                parsedCookieList[j].accepted = false;
                parsedCookieList[j].value = getCookie(parsedCookieList[j].name);
                deleteCookie(
                  parsedCookieList[j].name,
                  parsedCookieList[j].value,
                  parsedCookieList[j].domain
                );
              }
            } else {
              parsedCookieList[j].accepted = true;
            }
          }
        }
        console.log(parsedCookieList);
        saveInteraction(parsedCookieList);
        displayCookieElement("cookieModal", "close");
        displayCookieElement("cookieBar", "close");
      } else {
        displayCookieElement("cookieBar", "open");
        console.log("Waiting for user interaction with the cookie bar.");
      }
    }
    function saveInteraction(cookieList) {
      var interaction = {
        cookie_bar_id: cookieBarId,
        ip_address: ipInfoData.ip,
        timezone: ipInfoData.timezone,
        location: {
          city: ipInfoData.city,
          region: ipInfoData.region,
          country: ipInfoData.country,
        },
        position: {
          latitude: ipInfoData.loc.split(",")[0],
          longitude: ipInfoData.loc.split(",")[1],
        },
        cookie_list: cookieList,
      };
      console.log("interaction object", interaction)
      var interactionStr = JSON.stringify(interaction);
      console.log("interaction stringfied", interactionStr)
      httpAsync(apiUrl + "interactions", "POST", handleInteractionsResponse, interactionStr);
    }
    function handleSaveCookies() {
      var cookieArray = [];
      for (var i = 0; i < cookieInputElement.length; i++) {
        if (cookieInputElement[i].type === "checkbox") {
          var obj = {
            name: cookieInputElement[i].name,
            accepted: cookieInputElement[i].checked
          };
          cookieArray.push(obj);
        }
      }
      console.log(cookieArray);
      var cookieString = JSON.stringify(cookieArray);
      setCookie("privacyflow_cookies", cookieString, 30);
    }
    function displayCookieElement(cookieClass, action) {
      var el = document.getElementsByClassName(cookieClass)[0];
      if (action) {
        if (action === "close") {
          el.style.display = "none";
          return;
        }
        if (action === "open") {
          el.style.display = "flex";
          return;
        }
      }
      if (el.style.display === "flex") {
        el.style.display = "none";
        return;
      }
      el.style.display = "flex";
    }
    function httpAsync(theUrl, method, callback, data) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.responseText);
        }
      }
      xmlHttp.open(method, theUrl, true);
      if (data) {
        xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlHttp.send(data);
      } else {
        xmlHttp.send(null);
      }
    }
    function handleIpInfoResponse(data) {
      console.log(data);
      ipInfoData = JSON.parse(data);
    }
    function handleInteractionsResponse(data) {
      console.log(data);
    }
    var allCookiesString = '[{"_id":"60d1ed409a9f75001abf7c96","name":"taboola_session_id","domain":".taboola.com","secure":true,"session":true,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c97","name":"MUID","domain":".bing.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c98","name":"MR","domain":".bat.bing.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c99","name":"_gid","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c9a","name":"_gat_UA-158625470-1","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c9b","name":"_ga_P9B7WKT4JR","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c9c","name":"li_sugr","domain":".linkedin.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c9d","name":"lang","domain":".ads.linkedin.com","secure":true,"session":true,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c9e","name":"bcookie","domain":".linkedin.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7c9f","name":"lidc","domain":".linkedin.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca0","name":"UserMatchHistory","domain":".linkedin.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca1","name":"AnalyticsSyncHistory","domain":".linkedin.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca2","name":"_uetsid","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca3","name":"_uetvid","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca4","name":"t_gid","domain":".taboola.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca5","name":"mp_1fe06eeadd7468f52aabe7cf2ee50146_mixpanel","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca6","name":"lang","domain":".linkedin.com","secure":true,"session":true,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca7","name":"bscookie","domain":".www.linkedin.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca8","name":"_fbp","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7ca9","name":"fr","domain":".facebook.com","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7caa","name":"_ga","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7cab","name":"_gat_gtag_UA_158625470_1","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7cac","name":"hgyclh-w19134","domain":".advancedcorretora.com.br","secure":false,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7cad","name":"AWSALBCORS","domain":"ct-socket.huggy.app","secure":true,"session":false,"required":true,"category":"needed"},{"_id":"60d1ed409a9f75001abf7cae","name":"U","domain":".adsymptotic.com","secure":true,"session":false,"required":true,"category":"needed"}]';
    var ipInfoData = {};
    var cookieBarId = "60d1ed409a9f75001abf7c95";
    var apiUrl = "https://privacyflow-api.herokuapp.com/api/v1/";
    var domainUrl = "https://privacyflow.ai/";
    var domain = "privacyflow.ai";
    var cookieListElement = document.getElementsByClassName("cookieList")[0];
    if (cookieListElement) {
      var cookieInputElement = cookieListElement.getElementsByTagName("input");
    }
    document.addEventListener(
      "click",
      function (event) {
        if (event.target.matches(".acceptAll")) {
          event.preventDefault();
          handleSaveCookies();
          manageCookies();
        }
        if (event.target.matches(".save")) {
          event.preventDefault();
          handleSaveCookies();
          manageCookies();
        }
        if (event.target.matches(".settings")) {
          event.preventDefault();
          displayCookieElement("cookieModal", "open");
        }
        if (event.target.matches(".cookieModal")) {
          event.preventDefault();
          displayCookieElement("cookieModal", "close");
        }
      },
      false
    );
    setTimeout(function () {
      httpAsync("https://ipinfo.io/json", "GET", handleIpInfoResponse);
    }, 1000);
    setTimeout(function () {
      manageCookies();
    }, 2000);
    </script>    
    
        <SEO title={config.siteTitle} description={config.siteDescription} url={this.props.location} />
        <Posts data={data}/>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
