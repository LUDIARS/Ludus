---
type: "Ludus Game Case Study"
title: "Apex Legends"
description: "固有能力を持つレジェンドの分隊構成と、降下、戦利品、縮小区域、復活を結ぶヒーローシューター型バトルロイヤル。"
tags:
  - "ludus"
  - "case-study"
  - "apex-legends"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:apex-legends"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "1172470"
market_rank: "2"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

固有能力を持つレジェンドの分隊構成と、降下、戦利品、縮小区域、復活を結ぶヒーローシューター型バトルロイヤル。

# 市場スナップショット

- Steam Top Sellers順位: 2位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `1172470`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **キャラクター層**: [ヒーローシューター](../genres/hero-shooter.md) — 役割別能力と分隊シナジーを持つ。
- **試合構造**: [バトルロイヤル／エクストラクション](../genres/battle-royale.md) — 降下、収集、区域、生存で試合が進む。

# 主要システム

- [ヒーロー名簿と役割](../systems/hero-shooter/hero-roster.md)
- [固有アビリティキット](../systems/hero-shooter/ability-kit.md)
- [構成とシナジー](../systems/hero-shooter/composition-synergy.md)
- [降下・危険区域](../systems/battle-royale/deployment-zone.md)
- [戦利品とインベントリ](../systems/battle-royale/loot-inventory.md)
- [分隊・救助・再参加](../systems/battle-royale/squad-revive.md)

# UXの核

- 能力の役割理解と分隊連携
- 区域と戦利品が作る移動判断
- 救助による逆転期待

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [入力と操作](../domains/input-and-control.md)
- [空間と移動](../domains/space-and-navigation.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [ネットワークと同期](../domains/network-and-synchronization.md)

# 汎用実装とPictor境界

- 能力、区域、戦利品、復活はゲーム状態として所有し、Pictorは可読性を担う。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [UI描画](../pictor/ui-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位2位。
- [Apex Legends on Steam](https://store.steampowered.com/app/1172470/) — 公式説明と製品分類。
