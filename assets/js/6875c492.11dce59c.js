"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8610],{9703:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5999),l=a(2244);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(l.Z,{permalink:s,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(9460),l=a(390);function s(e){var t=e.items,a=e.component,s=void 0===a?l.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(s,null,n.createElement(t,null)))})))}},1714:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(4334),l=a(5999),s=a(8824),o=a(1944),i=a(5281),c=a(9960),g=a(9058),u=a(9703),m=a(197),p=a(9985);function d(e){var t,a=(t=(0,s.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function h(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:t}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function b(e){var t=e.tag,a=e.items,r=e.sidebar,s=e.listMetadata,o=d(t);return n.createElement(g.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(u.Z,{metadata:s}))}function E(e){return n.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);