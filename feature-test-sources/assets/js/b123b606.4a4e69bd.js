"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[840],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9232:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Data Filtering",u={unversionedId:"reference/data_preparation/data_filtering",id:"reference/data_preparation/data_filtering",isDocsHomePage:!1,title:"Data Filtering",description:"Data filtering refers to the process of choosing a smaller part of your dataset and using that subset for viewing or analysis.",source:"@site/docs/reference/data_preparation/data_filtering.md",sourceDirName:"reference/data_preparation",slug:"/reference/data_preparation/data_filtering",permalink:"/feature-test-sources/docs/reference/data_preparation/data_filtering",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_preparation/data_filtering.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Cleaning",permalink:"/feature-test-sources/docs/reference/data_preparation/data_cleaning"},next:{title:"Data Normalization",permalink:"/feature-test-sources/docs/reference/data_preparation/data_normalization"}},d=[{value:"filter_remove_duplicates",id:"filter_remove_duplicates",children:[]},{value:"filter_get_duplicates",id:"filter_get_duplicates",children:[]},{value:"Your ideas",id:"your-ideas",children:[]}],p={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-filtering"},"Data Filtering"),(0,o.kt)("p",null,"Data filtering refers to the process of choosing a smaller part of your dataset and using that subset for viewing or analysis."),(0,o.kt)("p",null,"Filtering may be used to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Look at results for a particular period of time."),(0,o.kt)("li",{parentName:"ul"},'Exclude erroneous or "bad" observations from an analysis.'),(0,o.kt)("li",{parentName:"ul"},'Extract erroneous or "bad" observations from an analysis for manual ',(0,o.kt)("a",{parentName:"li",href:"https://www.gartner.com/en/documents/554646/best-practices-for-data-stewardship"},"(by data stewards)"),"/ ",(0,o.kt)("a",{parentName:"li",href:"https://www2.deloitte.com/nl/nl/pages/enterprise-technology-and-performance/articles/augmented-data-management-beyond-the-hype.html"},"augmented (AI)")," Data Quality Management.")),(0,o.kt)("p",null,"re_data provides the following macros for filtering data. Check out the list of currently available filters and let us know if you could use some different ones on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack \ud83d\ude0a"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=macro_request.md&title=%5BMACRO%5D"},"Github")),"."),(0,o.kt)("h3",{id:"filter_remove_duplicates"},(0,o.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.filter_remove_duplicates"},"filter_remove_duplicates")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Arguments:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"relation: dbt model to perform the filtering on")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"unique_cols: List of columns that uniquely identify each row")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"sort_columns: Order in which we want to sort the partitioned rows. e.g. (created_at DESC, created_at ASC to choose the latest or earliest row based on the timestamp column"))),(0,o.kt)("p",null,"Return type: table with filtered rows"),(0,o.kt)("p",null,"This macro allows you to remove duplicate rows from a dbt model based on certain conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  id |  status      |   updated_at    |\n--------------------------------------+\n 1   |  pending     |    13:00:45     |\n 2   |  completed   |    13:05:23     |\n 1   |  completed   |    13:10:35     |\n 2   |  pending     |    13:04:49     |\n 3   |  completed   |    13:30:00     |\n\n => select id, status, updated_at from {{ re_data.filter_remove_duplicates(ref('duplicated'), ['id'], ['updated_at desc']) }} duplicates\n\n -- After filtering, the resulting rows are:\n\n  id |  status      |   updated_at    |\n--------------------------------------+\n 1   |  completed   |    13:10:35     |\n 2   |  completed   |    13:05:23     |\n 3   |  completed   |    13:30:00     |\n")),(0,o.kt)("h3",{id:"filter_get_duplicates"},(0,o.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.filter_get_duplicates"},"filter_get_duplicates")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Arguments:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"relation: dbt base model to perform the filtering on")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"unique_cols: List of columns that uniquely identify each row")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"sort_columns: Order in which we want to sort the partitioned rows. e.g. (created_at DESC, created_at ASC to choose the latest or earliest row based on the timestamp column"))),(0,o.kt)("p",null,"Return type: table with duplicate rows"),(0,o.kt)("p",null,"along with the fields of the base model the macro returns duplication context in new fields:\nre_data_duplicates_count - total number of duplicates with the same current key set\nre_data_duplicate_row_number - number of current duplicate row inside the group of duplicates with the same current key set"),(0,o.kt)("p",null,"This macro allows you to get duplicate rows from a dbt model based on certain conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  id |  status      |   updated_at    |\n--------------------------------------+\n 1   |  pending     |    13:00:45     |\n 2   |  completed   |    13:05:23     |\n 1   |  completed   |    13:10:35     |\n 2   |  pending     |    13:04:49     |\n 3   |  completed   |    13:30:00     |\n\n => select id, status, updated_at,\n       re_data_duplicate_group_row_count, \n       re_data_duplicate_group_row_number\n    from {{ re_data.filter_get_duplicates( ref('duplicated') , ['id'], ['updated_at desc']) }}  duplicates\n\n -- After filtering, the resulting rows are:\n\n id | updated_at |  status   | re_data_duplicate_group_row_count | re_data_duplicate_group_row_number\n----+------------+-----------+-----------------------------------+------------------------------------\n  1 | 13:10:35   | completed |                                 2 |                                  1\n  1 | 13:00:45   | pending   |                                 2 |                                  2\n  2 | 13:05:23   | completed |                                 2 |                                  1\n  2 | 13:04:49   | pending   |                                 2 |                                  2\n")),(0,o.kt)("h2",{id:"your-ideas"},"Your ideas"),(0,o.kt)("p",null,"If you have other suggestions of filtering data which you would like to be supported\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"let us know on Slack! \ud83d\ude0a"))))}c.isMDXComponent=!0}}]);