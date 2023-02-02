
function doGet(request) {
  return HtmlService
    .createTemplateFromFile("index")
    .evaluate();
}

function getProperty(key) {
  const scriptProperties = PropertiesService.getScriptProperties();
  return scriptProperties.getProperty(key);
}
