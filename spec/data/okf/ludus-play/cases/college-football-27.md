---
type: "Ludus Game Case Study"
title: "EA SPORTS College Football 27"
description: "選手・チーム操作、競技規則、相手AI、戦術選択、スコアとリプレイ、オンライン対戦を大学フットボールとして統合するスポーツシミュレーション。"
tags:
  - "ludus"
  - "case-study"
  - "college-football-27"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:college-football-27"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "4032350"
market_rank: "10"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

選手・チーム操作、競技規則、相手AI、戦術選択、スコアとリプレイ、オンライン対戦を大学フットボールとして統合するスポーツシミュレーション。

# 市場スナップショット

- Steam Top Sellers順位: 10位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `4032350`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主ジャンル**: [スポーツゲーム](../genres/sports.md) — 競技規則、チーム操作、試合進行を再現する。

# 主要システム

- [選手・チーム操作](../systems/sports/player-team-control.md)
- [ボール・用具の物理](../systems/sports/object-physics.md)
- [試合進行と競技規則](../systems/sports/match-rules.md)
- [対戦相手AIと戦術](../systems/sports/opponent-ai.md)
- [スコア表示とリプレイ](../systems/sports/score-replay.md)
- [オンライン対戦セッション](../systems/sports/online-session.md)

# UXの核

- 競技規則に沿う判断と操作
- 戦術と選手能力の組み合わせ
- 中継的なスコア・リプレイ表現

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [入力と操作](../domains/input-and-control.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [ルールと状態](../domains/rules-and-state.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [演出とフィードバック](../domains/presentation-and-feedback.md)

# 汎用実装とPictor境界

- 競技規則、物理、AI、同期はゲーム層、スタジアム・中継UI・リプレイ演出はPictor候補。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [カメラ表現アダプター](../pictor/camera-presentation.md)
- [UI描画](../pictor/ui-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位10位。
- [EA SPORTS College Football 27 on Steam](https://store.steampowered.com/app/4032350/) — 公式説明と製品分類。
