
function doGet(request) {
  return HtmlService.createHtmlOutputFromFile("index");
}

function getProperty(key){
  const scriptProperties = PropertiesService.getScriptProperties();
  return scriptProperties.getProperty(key);
}

function getPropertyKeys(){
  return PropertiesService.getScriptProperties().getKeys();
}