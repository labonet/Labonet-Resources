// search index for Quick 'n Easy Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Labonet-Resources-Archive-Home.html", "LR Home", "lr home icons all image and icon resources created by labonet for its programs rights reserved these are free don be scammed sites that make you pay them not view screen savers collected excellent personalizing your computer screensavers made banners usually used in windows wizard decorating installations or other they from copy ", "");
   this[database_length++] = new SearchPage("Icons.html", "LR Icons", "lr icons home labonet copy ", "");
   this[database_length++] = new SearchPage("Banners.html", "LR Banners", "lr banners home labonet copy ", "");
   this[database_length++] = new SearchPage("Screensavers.html", "LR Screen Savers", "lr screen savers there are no at the moment home screensavers labonet copy ", "");
   return this;
}
