---
type: "Ludus Game Case Study"
title: "Overwatch"
description: "役割別ヒーロー、固有能力、交代可能な構成、目標進行、必殺技経済を高速なチーム戦へまとめたヒーローシューター。"
tags:
  - "ludus"
  - "case-study"
  - "overwatch"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:overwatch"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "2357570"
market_rank: "6"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

役割別ヒーロー、固有能力、交代可能な構成、目標進行、必殺技経済を高速なチーム戦へまとめたヒーローシューター。

# 市場スナップショット

- Steam Top Sellers順位: 6位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `2357570`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主ジャンル**: [ヒーローシューター](../genres/hero-shooter.md) — 役割、能力、構成変更、目標戦が中心。
- **操作層**: [シューティングゲーム(FPS/TPS)](../genres/shooter.md) — 射撃と照準を基本操作に含む。

# 主要システム

- [ヒーロー名簿と役割](../systems/hero-shooter/hero-roster.md)
- [固有アビリティキット](../systems/hero-shooter/ability-kit.md)
- [構成とシナジー](../systems/hero-shooter/composition-synergy.md)
- [チーム目標戦闘](../systems/hero-shooter/objective-combat.md)
- [必殺技ゲージと交戦計画](../systems/hero-shooter/ultimate-economy.md)
- [ライブバランスとテレメトリ](../systems/hero-shooter/live-balance.md)

# UXの核

- 役割別の貢献と構成変更
- 読みやすい能力の応酬
- 必殺技を巡る交戦計画

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [入力と操作](../domains/input-and-control.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [メタゲームと運用](../domains/meta-and-live-operations.md)

# 汎用実装とPictor境界

- 能力状態、目標、評価はゲーム層、シルエット・効果・HUDは表現層が所有する。

# Pictor候補

- [UI描画](../pictor/ui-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位6位。
- [Overwatch on Steam](https://store.steampowered.com/app/2357570/) — 公式説明と製品分類。
