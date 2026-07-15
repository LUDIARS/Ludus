---
type: "Ludus Game Case Study"
title: "Assassin's Creed Black Flag Resynced"
description: "海賊のオープンワールド探索、海戦、パルクールに、知覚と警戒を読む潜入経路選択を重ねたアクションアドベンチャー。"
tags:
  - "ludus"
  - "case-study"
  - "assassins-creed-black-flag-resynced"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:assassins-creed-black-flag-resynced"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "3751950"
market_rank: "4"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

海賊のオープンワールド探索、海戦、パルクールに、知覚と警戒を読む潜入経路選択を重ねたアクションアドベンチャー。

# 市場スナップショット

- Steam Top Sellers順位: 4位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `3751950`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **潜入層**: [ステルス](../genres/stealth.md) — 知覚、警戒、遮蔽、介入手段を扱う。
- **空間構造**: [オープンワールドゲーム](../genres/open-world.md) — 探索と移動の自由度を持つ。
- **進行層**: [アドベンチャーゲーム](../genres/adventure.md) — 探索と物語導線を持つ。

# 主要システム

- [知覚モデル](../systems/stealth/perception-model.md)
- [疑念と警戒状態](../systems/stealth/suspicion-alert.md)
- [遮蔽と潜入経路](../systems/stealth/cover-traversal.md)
- [介入手段の選択](../systems/stealth/intervention-choice.md)
- [発見と地図](../systems/open-world/discovery-map.md)
- [シーン探索と移動](../systems/adventure/scene-exploration.md)

# UXの核

- 陸海を横断する探索
- 敵の知覚を読んだ潜入
- 戦闘と回避の方針選択

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [入力と操作](../domains/input-and-control.md)
- [空間と移動](../domains/space-and-navigation.md)
- [物語と知識](../domains/narrative-and-knowledge.md)

# 汎用実装とPictor境界

- NPC知覚と警戒はゲーム状態、可視化とカメラはPictor境界に分離する。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [カメラ表現アダプター](../pictor/camera-presentation.md)
- [アニメーション表現](../pictor/animation-presentation.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位4位。
- [Assassin's Creed Black Flag Resynced on Steam](https://store.steampowered.com/app/3751950/) — 公式説明と製品分類。
