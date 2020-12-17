<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body class="no-touch">
  <div id="app"></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    WebFontConfig = {
      google: { families: [ 'Open+Sans:400,600,700', 'Rouge+Script' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>
  <!-- BoldChat Visitor Monitor HTML v5.00 (Website=1488 - Central Ohio Orthodontics,ChatButton=1488 - Central Ohio Orthodontics,ChatInvitation=1488 - Central Ohio Orthodontics) -->
  <!-- <script type="text/javascript">
  window._bcvma = window._bcvma || [];
  _bcvma.push(["setAccountID", "438176494458224912"]); _bcvma.push(["setParameter", "WebsiteID", "435751087274695686"]); _bcvma.push(["setParameter", "InvitationID", "435751087229317678"]); _bcvma.push(["setParameter", "VisitName", ""]); _bcvma.push(["setParameter", "VisitPhone", ""]); _bcvma.push(["setParameter", "VisitEmail", ""]); _bcvma.push(["setParameter", "VisitRef", ""]); _bcvma.push(["setParameter", "VisitInfo", ""]); _bcvma.push(["setParameter", "CustomUrl", ""]); _bcvma.push(["setParameter", "WindowParameters", ""]); _bcvma.push(["addFloat", {type: "chat", id: "435751090068266797"}]); _bcvma.push(["pageViewed"]);
  var bcLoad = function(){
  if(window.bcLoaded) return; window.bcLoaded = true;
  var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true; vms.src = ('https:'==document.location.protocol?'https://':'http://') +
  "vmss.boldchat.com/aid/438176494458224912/bc.vms4/vms.js";
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
  };
  if(window.pageViewer && pageViewer.load) pageViewer.load();
  else if(document.readyState=="complete") bcLoad();
  else if(window.addEventListener) window.addEventListener('load', bcLoad, false); else window.attachEvent('onload', bcLoad);
  </script>
  <noscript>
  <a href="http://www.boldchat.com" title="Live Chat Software" target="_blank"><img alt="Live Chat Software" src="https://vms.boldchat.com/aid/438176494458224912/bc.vmi?wdid=435751087274695686&amp;vr=&amp;vn=&amp;vi=& amp;ve=&amp;vp=&amp;curl=" border="0" width="1" height="1" /></a>
  </noscript> -->
  <!-- /BoldChat Visitor Monitor HTML v5.00 -->
  <!-- Ruby Chat Code -->
  <script>
  window.rubyApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};
  (function(){var e="7c1f3aea-7f25-4658-8e19-80e50b17a716";
  var a=false;
  var t=document.createElement("script");
  t.async=true;
  t.type="text/javascript";
  t.src="https://chatwidget.ruby.com/"+e;
  document.getElementsByTagName("HEAD").item(0).appendChild(t);
  t.onreadystatechange=t.onload=function(t){
    if(!a&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
      if(window.RubyChat)window.RubyChat({c:e});
      a=true
    }
  }})();
  </script>
  <!-- End Ruby Chat Code -->
</body>
</html>
