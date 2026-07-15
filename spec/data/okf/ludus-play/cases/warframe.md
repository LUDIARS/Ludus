---
type: "Ludus Game Case Study"
title: "Warframe"
description: "高速な三人称射撃と近接戦闘、反復ミッション、ランダム性を持つ装備獲得、ビルド更新、協力セッションを長期進行へ結ぶルーターシューター。"
tags:
  - "ludus"
  - "case-study"
  - "warframe"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:warframe"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "230410"
market_rank: "8"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

高速な三人称射撃と近接戦闘、反復ミッション、ランダム性を持つ装備獲得、ビルド更新、協力セッションを長期進行へ結ぶルーターシューター。

# 市場スナップショット

- Steam Top Sellers順位: 8位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `230410`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主循環**: [ルーターシューター](../genres/looter-shooter.md) — 戦闘、戦利品、ビルド、再出撃が中核。
- **近接・装備層**: [ハックアンドスラッシュ](../genres/hack-and-slash.md) — 群衆戦と装備特性を持つ。
- **成長層**: [RPG(ロールプレイングゲーム)](../genres/rpg.md) — 能力と装備を長期育成する。

# 主要システム

- [戦闘・戦利品循環](../systems/looter-shooter/combat-loot-loop.md)
- [装備品質と特性](../systems/looter-shooter/procedural-affix.md)
- [ロードアウトとビルド](../systems/looter-shooter/loadout-build.md)
- [ミッションインスタンス](../systems/looter-shooter/mission-instance.md)
- [協力セッションと分配](../systems/looter-shooter/cooperative-session.md)
- [スキルツリー/ビルドシステム](../systems/hack-and-slash/s04.md)
- [スキル/アビリティシステム](../systems/rpg/s03.md)

# UXの核

- 高速移動と群衆戦の爽快感
- 戦利品から構成を発見する楽しさ
- 協力と長期育成

# ドメイン要素

- [入力と操作](../domains/input-and-control.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [リソースと経済](../domains/resources-and-economy.md)
- [目的と成長](../domains/objectives-and-progression.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [メタゲームと運用](../domains/meta-and-live-operations.md)

# 汎用実装とPictor境界

- ミッション、ドロップ、ビルド効果はゲーム層、戦闘の視覚効果と比較UIは表現境界。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)
- [UI描画](../pictor/ui-rendering.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位8位。
- [Warframe on Steam](https://store.steampowered.com/app/230410/) — 公式説明と製品分類。
