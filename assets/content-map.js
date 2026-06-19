const contentMap = {
  site: "https://m-main-i-game.com.cn",
  keyword: "爱游戏",
  sections: {
    home: {
      title: "首页",
      tags: ["爱游戏", "热门推荐", "新游上线"],
      description: "平台首页，展示最新游戏内容和推荐信息。"
    },
    news: {
      title: "新闻中心",
      tags: ["爱游戏", "游戏资讯", "行业动态"],
      description: "发布游戏相关新闻、公告和行业趋势。"
    },
    guides: {
      title: "攻略专区",
      tags: ["爱游戏", "新手攻略", "进阶技巧"],
      description: "提供各类游戏的玩法指南和策略分析。"
    },
    community: {
      title: "玩家社区",
      tags: ["爱游戏", "玩家交流", "论坛"],
      description: "玩家互动、分享心得和组队交友。"
    },
    about: {
      title: "关于我们",
      tags: ["爱游戏", "平台介绍", "联系方式"],
      description: "了解平台背景、团队信息与联系方式。"
    }
  }
};

function searchContent(query, data = contentMap) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  for (const key in data.sections) {
    if (Object.prototype.hasOwnProperty.call(data.sections, key)) {
      const section = data.sections[key];
      const matchTag = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
      const matchTitle = section.title.toLowerCase().includes(lowerQuery);
      const matchDesc = section.description.toLowerCase().includes(lowerQuery);

      if (matchTag || matchTitle || matchDesc) {
        results.push({
          id: key,
          title: section.title,
          tags: section.tags,
          description: section.description
        });
      }
    }
  }

  return results;
}

function filterByTag(tag, data = contentMap) {
  const lowerTag = tag.toLowerCase();
  const filtered = [];

  for (const key in data.sections) {
    if (Object.prototype.hasOwnProperty.call(data.sections, key)) {
      const section = data.sections[key];
      const hasTag = section.tags.some(t => t.toLowerCase() === lowerTag);
      if (hasTag) {
        filtered.push({
          id: key,
          title: section.title,
          tags: section.tags,
          description: section.description
        });
      }
    }
  }

  return filtered;
}

function listAllSections(data = contentMap) {
  const list = [];
  for (const key in data.sections) {
    if (Object.prototype.hasOwnProperty.call(data.sections, key)) {
      list.push({
        id: key,
        title: data.sections[key].title
      });
    }
  }
  return list;
}

function getSectionById(id, data = contentMap) {
  if (data.sections[id]) {
    return {
      id: id,
      title: data.sections[id].title,
      tags: data.sections[id].tags,
      description: data.sections[id].description
    };
  }
  return null;
}