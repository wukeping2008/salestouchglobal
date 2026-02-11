#!/usr/bin/env python3
"""
RSS News Parser - Get Top 10 International News
无需API Key的免费方案
"""

import requests
import xml.etree.ElementTree as ET
import json
from datetime import datetime
from typing import List, Dict, Any

# RSS Feed URLs（免费，公开访问）
RSS_FEEDS = {
    "bbc_world": "http://feeds.bbci.co.uk/news/world/rss.xml",
    "reuters_world": "http://feeds.reuters.com/reuters/topNews",
    "cnn_world": "http://rss.cnn.com/rss/edition_world.rss",
    "aljazeera": "https://www.aljazeera.com/xml/rss/all.xml",
    "france24": "https://www.france24.com/en/rss/accueil.xml",
    "guardian": "https://www.theguardian.com/world/rss",
    "ap": "https://www.apnews.com/",
    "bloomberg": "https://www.bloomberg.com/feed",
    "ft_world": "https://www.ft.com/world/rss",
    "cnbc": "https://www.cnbc.com/id/100003114/rss"
}

def parse_rss_feed(feed_url: str, max_items: int = 10) -> List[Dict[str, Any]]:
    """
    解析RSS Feed并返回新闻列表
    
    Args:
        feed_url: RSS Feed URL
        max_items: 最大新闻条目数
    
    Returns:
        新闻列表，每条包含标题、链接、描述、发布日期、来源
    """
    try:
        # 获取RSS Feed
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/rss+xml, application/xml, text/xml, */*'
        }
        response = requests.get(feed_url, headers=headers, timeout=15)
        response.raise_for_status()
        
        # 解析XML
        root = ET.fromstring(response.content)
        
        # 处理不同的命名空间
        # 移除命名空间以简化解析
        for elem in root.iter():
            if '}' in elem.tag:
                elem.tag = elem.tag.split('}', 1)[0]
        
        # 提取新闻条目
        news_list = []
        namespace = {'atom': 'http://www.w3.org/2005/Atom'}
        
        # 尝试不同的RSS标签格式
        if root.tag == 'rss':
            # RSS 2.0 格式
            channel = root.find('channel')
            if channel is not None:
                items = channel.findall('item')
                for item in items[:max_items]:
                    title_elem = item.find('title')
                    link_elem = item.find('link')
                    desc_elem = item.find('description')
                    pub_date_elem = item.find('pubDate')
                    category_elem = item.find('category')
                    
                    title = title_elem.text if title_elem is not None else 'No Title'
                    link = link_elem.text if link_elem is not None else ''
                    description = desc_elem.text if desc_elem is not None else ''
                    pub_date = pub_date_elem.text if pub_date_elem is not None else datetime.now().isoformat()
                    category = category_elem.text if category_elem is not None else 'World'
                    
                    news_list.append({
                        'title': title,
                        'link': link,
                        'description': description[:200] + '...' if len(description) > 200 else description,
                        'pub_date': pub_date,
                        'category': category,
                        'source': feed_url
                    })
        
        elif root.tag == '{http://www.w3.org/2005/Atom}feed':
            # Atom Feed格式
            entries = root.findall('entry')
            for entry in entries[:max_items]:
                title_elem = entry.find('{http://www.w3.org/2005/Atom}title')
                link_elem = entry.find('{http://www.w3.org/2005/Atom}link')
                desc_elem = entry.find('{http://www.w3.org/2005/Atom}summary')
                pub_date_elem = entry.find('{http://www.w3.org/2005/Atom}published')
                category_elem = entry.find('{http://www.w3.org/2005/Atom}category')
                
                title = title_elem.text if title_elem is not None else 'No Title'
                link = link_elem.text if link_elem is not None else ''
                description = desc_elem.text if desc_elem is not None else ''
                pub_date = pub_date_elem.text if pub_date_elem is not None else datetime.now().isoformat()
                category = category_elem.text if category_elem is not None else 'World'
                
                news_list.append({
                    'title': title,
                    'link': link,
                    "description": description[:200] + '...' if len(description) > 200 else description,
                    'pub_date': pub_date,
                    'category': category,
                    'source': feed_url
                })
        
        elif 'feed' in root.tag.lower():
            # 通用Feed格式
            entries = root.findall('item') + root.findall('entry')
            for entry in entries[:max_items]:
                title_elem = entry.find('title')
                link_elem = entry.find('link')
                desc_elem = entry.find('description')
                pub_date_elem = entry.find('pubDate')
                category_elem = entry.find('category')
                
                title = title_elem.text if title_elem is not None else 'No Title'
                link = link_elem.text if link_elem is not None else ''
                description = desc_elem.text if desc_elem is not None else ''
                pub_date = pub_date_elem.text if pub_date_elem is not None else datetime.now().isoformat()
                category = category_elem.text if category_elem is not None else 'World'
                
                news_list.append({
                    'title': title,
                    'link': link,
                    "description": description[:200] + '...' if len(description) > 200 else description,
                    'pub_date': pub_date,
                    'category': category,
                    'source': feed_url
                })
        
        else:
            # 尝试查找所有可能的item标签
            items = root.findall('.//item') + root.findall('.//entry')
            for item in items[:max_items]:
                title_elem = item.find('title')
                link_elem = item.find('link')
                desc_elem = item.find('description')
                pub_date_elem = item.find('pubDate')
                category_elem = item.find('category')
                
                title = title_elem.text if title_elem is not None else 'No Title'
                link = link_elem.text if link_elem is not None else ''
                description = desc_elem.text if desc_elem is not None else ''
                pub_date = pub_date_elem.text if pub_date_elem is not None else datetime.now().isoformat()
                category = category_elem.text if category_elem is not None else 'World'
                
                news_list.append({
                    'title': title,
                    "link": link,
                    "description": description[:200] + '...' if len(description) > 200 else description,
                    'pub_date': pub_date,
                    'category': category,
                    'source': feed_url
                })
        
        return news_list
    
    except requests.RequestException as e:
        print(f"❌ Error fetching {feed_url}: {str(e)}")
        return []
    except ET.ParseError as e:
        print(f"❌ Error parsing {feed_url}: {str(e)}")
        return []
    except Exception as e:
        print(f"❌ Unexpected error with {feed_url}: {str(e)}")
        return []

def get_top_news(max_items_per_feed: int = 10) -> Dict[str, Any]:
    """
    从多个RSS Feed获取最新的国际新闻
    
    Args:
        max_items_per_feed: 每个Feed的最大新闻条目数
    
    Returns:
        包含时间戳、数量、新闻列表的字典
    """
    all_news = []
    feed_results = {}
    
    print("🌍 正在获取国际新闻...")
    
    # 解析每个RSS Feed
    for feed_name, feed_url in RSS_FEEDS.items():
        print(f"📱 正在解析 {feed_name}...")
        news_items = parse_rss_feed(feed_url, max_items)
        
        if news_items:
            all_news.extend(news_items)
            feed_results[feed_name] = {
                'success': True,
                'count': len(news_items),
                'first_item': news_items[0]['title'] if news_items else None
            }
        else:
            feed_results[feed_name] = {
                'success': False,
                'count': 0,
                'error': 'Failed to parse feed'
            }
    
    # 按发布时间排序（最新的在前）
    all_news.sort(key=lambda x: x['pub_date'], reverse=True)
    
    # 去重（基于标题）
    seen_titles = set()
    unique_news = []
    for news in all_news:
        if news['title'] not in seen_titles:
            seen_titles.add(news['title'])
            unique_news.append(news)
    
    # 只保留前10条新闻
    top_10_news = unique_news[:max_items_per_feed]
    
    result = {
        'timestamp': datetime.now().isoformat(),
        'total_fetched': len(all_news),
        'unique_count': len(unique_news),
        'count': len(top_10_news),
        'feeds': feed_results,
        'news': top_10_news
    }
    
    return result

def print_news_summary(result: Dict[str, Any]):
    """
    打印新闻摘要
    """
    print("\n" + "="*60)
    print("📰 今日十大国际新闻")
    print("="*60)
    print(f"⏰ 获取时间: {result['timestamp']}")
    print(f"📊 获取总数: {result['total_fetched']} 条")
    print(f"✨ 去重后: {result['unique_count']} 条")
    print(f"🎯 展示: {result['count']} 条")
    print("="*60)
    
    print("\n📋 各Feed解析结果:")
    for feed_name, feed_result in result['feeds'].items():
        if feed_result['success']:
            print(f"  ✅ {feed_name}: {feed_result['count']} 条")
            if feed_result['first_item']:
                print(f"     首条: {feed_result['first_item'][:50]}...")
        else:
            print(f"  ❌ {feed_name}: {feed_result.get('error', 'Failed')}")
    
    print("\n" + "-"*60)
    print("🌐 今日十大国际新闻:")
    print("-"*60)
    
    for i, news in enumerate(result['news'], 1):
        print(f"\n{i}. {news['title']}")
        print(f"   📺 来源: {get_feed_name(news['source'])}")
        print(f"   ⏰ 发布时间: {news['pub_date']}")
        print(f"   📝 类别: {news['category']}")
        print(f"   🔗 链接: {news['link']}")
        print(f"   📖 描述: {news['description']}")
        print("-"*60)

def get_feed_name(feed_url: str) -> str:
    """
    根据Feed URL返回源名称
    """
    if "bbc" in feed_url.lower():
        return "BBC World"
    elif "reuters" in feed_url.lower():
        return "Reuters"
    elif "cnn" in feed_url.lower():
        return "CNN"
    elif "aljazeera" in feed_url.lower():
        return "Al Jazeera"
    elif "france24" in feed_url.lower():
        return "France 24"
    elif "guardian" in feed_url.lower():
        return "The Guardian"
    elif "ap" in feed_url.lower():
        return "Associated Press"
    elif "bloomberg" in feed_url.lower():
        return "Bloomberg"
    elif "ft" in feed_url.lower():
        return "Financial Times"
    elif "cnbc" in feed_url.lower():
        return "CNBC"
    else:
        return "Unknown"

def save_to_json(result: Dict[str, Any], filename: str = "news_result.json"):
    """
    将结果保存为JSON文件
    """
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f"\n💾 新闻已保存到: {filename}")
    except Exception as e:
        print(f"❌ 保存文件失败: {str(e)}")

def main():
    """
    主函数
    """
    print("🌍 RSS News Parser - 国际新闻获取工具")
    print("="*60)
    print("📱 无需API Key - 使用免费公开RSS Feed")
    print("🌍 支持的来源: BBC, Reuters, CNN, Al Jazeera, Guardian, 等")
    print("="*60)
    
    # 获取新闻
    result = get_top_news(max_items_per_feed=10)
    
    # 打印摘要
    print_news_summary(result)
    
    # 保存到JSON
    save_to_json(result)
    
    print("\n" + "="*60)
    print("✨ 获取完成！")
    print("="*60)

if __name__ == "__main__":
    main()
