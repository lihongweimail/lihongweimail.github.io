(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;","b4eeb622c438bcfb56a35d5267eb0ab6-8.html":"Software Project Management","314371a97a30bc7b070b59d06650e6c1-5.html":"高级语言程序设计","archive-february-2019.html":"Archives for February 2019","8014bc209a56be1d52032c5c33651f16-7.html":"Requirements Engineering","91bcbd1b0f9d9c9668a155de1b935597-4.html":"数据库原理与设计","archive-august-2018.html":"Archives for August 2018","2a37ab18e0053fcaedbb733417b76acc-6.html":"操作系统原理与技术","b14745054090c7aeb52bc0a22c9ee0f4-3.html":"课程简介\n 软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。 它涉及程序设计语言、数据库、软件开发工具、 系统平台、标准、设计模式等方面。本课程将教授和讨论《软件工程》的高级议题， 将复习和讨论软件工程的基本概念、技术和方法，包括软件的开发模型、软件项目管理、软件质量度量","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","fd52c71cc0cb24a0a0231108c41e44c7-9.html":"操作系统课程简介\n课时设置\n操作系统是必修的专业主干课。课程总计96学时, 其中授课时间为64学时，实验课时为32学时。\n操作系统的重要性\n它是计算机系统配置的基本软件之一，占有中心地位。操作系统质量直接影响对计算机的使用。 它能扩充计算机系统的功能，并能够充分发挥系统中各种设备的使用效率，提高系统","archive-september-2018.html":"Archives for September 2018"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();