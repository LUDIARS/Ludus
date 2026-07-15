---
type: "Ludus Game Case Study"
title: "Palworld"
description: "オープンワールドの採取・建築・生存に、クリーチャーの捕獲、編成、育成、拠点作業を統合した収集型サバイバル。"
tags:
  - "ludus"
  - "case-study"
  - "palworld"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:palworld"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "1623730"
market_rank: "3"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

オープンワールドの採取・建築・生存に、クリーチャーの捕獲、編成、育成、拠点作業を統合した収集型サバイバル。

# 市場スナップショット

- Steam Top Sellers順位: 3位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `1623730`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主循環**: [クリーチャー収集](../genres/creature-collector.md) — 遭遇、捕獲、名簿、配置が中心。
- **世界活動**: [サバイバルゲーム](../genres/survival.md) — 採取、クラフト、建築を行う。
- **空間構造**: [オープンワールドゲーム](../genres/open-world.md) — 広い世界を探索する。

# 主要システム

- [遭遇と獲得](../systems/creature-collector/encounter-capture.md)
- [名簿と保管](../systems/creature-collector/roster-storage.md)
- [パーティ編成と相性](../systems/creature-collector/party-composition.md)
- [配置と生活利用](../systems/creature-collector/habitat-work.md)
- [リソース採取/収集システム](../systems/survival/gathering.md)
- [建築/拠点構築システム](../systems/survival/building.md)
- [世界ストリーミングと移動](../systems/open-world/streaming-traversal.md)

# UXの核

- 未知の生物との発見と獲得
- 仲間を戦闘と生活の双方で活用する共生感
- 探索・生産・育成の循環

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [空間と移動](../domains/space-and-navigation.md)
- [リソースと経済](../domains/resources-and-economy.md)
- [目的と成長](../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../domains/content-and-pacing.md)

# 汎用実装とPictor境界

- 出現、捕獲、個体状態、作業割当はゲームロジックが所有する。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [UI描画](../pictor/ui-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位3位。
- [Palworld on Steam](https://store.steampowered.com/app/1623730/) — 公式説明と製品分類。
