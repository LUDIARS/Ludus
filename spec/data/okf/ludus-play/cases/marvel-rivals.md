---
type: "Ludus Game Case Study"
title: "Marvel Rivals"
description: "Marvelヒーローの固有能力、チームアップ、役割構成、破壊可能な戦場をチーム目標戦へ統合した三人称ヒーローシューター。"
tags:
  - "ludus"
  - "case-study"
  - "marvel-rivals"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:marvel-rivals"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "2767030"
market_rank: "5"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

Marvelヒーローの固有能力、チームアップ、役割構成、破壊可能な戦場をチーム目標戦へ統合した三人称ヒーローシューター。

# 市場スナップショット

- Steam Top Sellers順位: 5位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `2767030`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主ジャンル**: [ヒーローシューター](../genres/hero-shooter.md) — ヒーロー能力、シナジー、チーム目標が中核。
- **操作層**: [シューティングゲーム(FPS/TPS)](../genres/shooter.md) — 三人称射撃を用いる。

# 主要システム

- [ヒーロー名簿と役割](../systems/hero-shooter/hero-roster.md)
- [固有アビリティキット](../systems/hero-shooter/ability-kit.md)
- [構成とシナジー](../systems/hero-shooter/composition-synergy.md)
- [チーム目標戦闘](../systems/hero-shooter/objective-combat.md)
- [必殺技ゲージと交戦計画](../systems/hero-shooter/ultimate-economy.md)
- [照準システム(Aiming System)](../systems/shooter/s01.md)

# UXの核

- 既知のヒーロー役割への没入
- 能力コンボの連携感
- 破壊で変わる交戦空間

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [空間と移動](../domains/space-and-navigation.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [演出とフィードバック](../domains/presentation-and-feedback.md)

# 汎用実装とPictor境界

- 能力と破壊状態はゲーム権威が所有し、Pictorは明瞭なチーム識別と効果を描画する。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)
- [UI描画](../pictor/ui-rendering.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位5位。
- [Marvel Rivals on Steam](https://store.steampowered.com/app/2767030/) — 公式説明と製品分類。
