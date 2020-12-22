import { EnvSettings } from "./EnvSettings";

export class Settings_Dev extends EnvSettings {
  ENTRYSCAPE_DATASETS_PATH="registrera.oppnadata.se"
  ENTRYSCAPE_SPECS_PATH="editera.dataportal.se"
  ENTRYSCAPE_TERMS_PATH="editera.dataportal.se"
  ENTRYSCAPE_ORG_STATS_URL="https://registrera.oppnadata.se/charts/orgData.json"
  ENTRYSCAPE_THEME_STATS_URL="https://registrera.oppnadata.se/charts/themeData.json"
  ENTRYSCAPE_THEME_STATS_URL_EN="https://registrera.oppnadata.se/charts/themeData_en.json"
  
  ENTRYSCAPE_CONCEPT_STATS_URL="https://editera.dataportal.se/stats/entityData.json"
  ENTRYSCAPE_HISTORY_STATS_URL="https://registrera.oppnadata.se/stats/historyData.json"  
  
  ENTRYSCAPE_BLOCKS_URL="https://dataportal.azureedge.net/cdn/blocks.0.20.app-0.10.js"

  ENTRYSCAPE_OPENDATA_SV_URL="https://dataportal.azureedge.net/cdn/ext-opendata-sv-0.6.js"
  ENTRYSCAPE_OPENDATA_EN_URL="https://dataportal.azureedge.net/cdn/ext-opendata-en-0.6.js"

  ENTRYSCAPE_SITEMAP_JSON_URL="https://registrera.oppnadata.se/sitemap.json";

  CONTENTBACKEND_SITEURL="*dataportal.web.local";


  // CONTENTBACKEND_GRAPHAPI="https://digg-test-graphproxy.azurewebsites.net";
  CONTENTBACKEND_GRAPHAPI="http://localhost:4444";

  CANONICAL_URL = "http://localhost:8080";

  MATOMO_SITEID = 6;

  envName = 'dev';

  public constructor()
  {
    super();    
  }
}