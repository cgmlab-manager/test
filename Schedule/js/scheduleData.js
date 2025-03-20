var parameter = new URLQueryParameter();
var year = Number(parameter.get("year"));
document.write(`<script src="js/schedule${year}Data.js"></script>`)