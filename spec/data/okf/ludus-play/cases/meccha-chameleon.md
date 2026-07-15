---
type: "Ludus Game Case Study"
title: "MECCHA CHAMELEON"
description: "身体の色を舞台へ合わせて隠れる側と、それを見破る側の情報差を、短い対戦と配信向けの観戦性へまとめた非対称パーティゲーム。"
tags:
  - "ludus"
  - "case-study"
  - "meccha-chameleon"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:meccha-chameleon"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "4704690"
market_rank: "7"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

身体の色を舞台へ合わせて隠れる側と、それを見破る側の情報差を、短い対戦と配信向けの観戦性へまとめた非対称パーティゲーム。

# 市場スナップショット

- Steam Top Sellers順位: 7位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `4704690`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **試合構造**: [非対称マルチプレイ](../genres/asymmetric-multiplayer.md) — 隠れる側と探す側で情報と目標が異なる。
- **隠密層**: [ステルス](../genres/stealth.md) — 外見と環境を合わせ発見を避ける。

# 主要システム

- [非対称役割と能力](../systems/asymmetric-multiplayer/role-asymmetry.md)
- [陣営別の不完全情報](../systems/asymmetric-multiplayer/hidden-information.md)
- [追跡と逃走](../systems/asymmetric-multiplayer/pursuit-evasion.md)
- [可視性と騒音](../systems/stealth/visibility-noise.md)
- [疑念と警戒状態](../systems/stealth/suspicion-alert.md)

# UXの核

- 環境へ同化する創意工夫
- 見破る側との情報差
- 観戦者にも分かる発見の瞬間

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [空間と移動](../domains/space-and-navigation.md)
- [情報とUI](../domains/information-and-ui.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [演出とフィードバック](../domains/presentation-and-feedback.md)

# 汎用実装とPictor境界

- 同化判定と陣営情報はゲーム層、素材・色・観戦UIはPictor候補とする。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [UI描画](../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../pictor/text-vector-motion.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位7位。
- [MECCHA CHAMELEON on Steam](https://store.steampowered.com/app/4704690/) — 公式説明と製品分類。
