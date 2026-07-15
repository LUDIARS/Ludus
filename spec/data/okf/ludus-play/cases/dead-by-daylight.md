---
type: "Ludus Game Case Study"
title: "Dead by Daylight"
description: "一人の殺人鬼と四人の生存者に異なる能力と情報を与え、追跡、修理目標、無力化、救助、脱出を同じ試合へ組み込む非対称ホラー。"
tags:
  - "ludus"
  - "case-study"
  - "dead-by-daylight"
timestamp: "2026-07-15T00:00:00+09:00"
case_study_id: "case:dead-by-daylight"
source_kind: "steam-top-seller-snapshot"
steam_app_id: "381210"
market_rank: "9"
market_captured_at: "2026-07-15T05:37:38.191Z"
---

# 結論

一人の殺人鬼と四人の生存者に異なる能力と情報を与え、追跡、修理目標、無力化、救助、脱出を同じ試合へ組み込む非対称ホラー。

# 市場スナップショット

- Steam Top Sellers順位: 9位（english/US、2026-07-15T05:37:38.191Z）
- Steam App ID: `381210`
- 取得データ: `spec/data/steam-crawl-2026-07-15.json`

# ジャンル分解

- **主構造**: [非対称マルチプレイ](../genres/asymmetric-multiplayer.md) — 人数、能力、情報、目標が陣営で異なる。
- **感情層**: [ホラーゲーム](../genres/horror.md) — 追跡者、音、視界制限で恐怖を作る。
- **生存者行動**: [ステルス](../genres/stealth.md) — 知覚を避けて目標を進める。

# 主要システム

- [非対称役割と能力](../systems/asymmetric-multiplayer/role-asymmetry.md)
- [陣営別の不完全情報](../systems/asymmetric-multiplayer/hidden-information.md)
- [追跡と逃走](../systems/asymmetric-multiplayer/pursuit-evasion.md)
- [複数目標と時間圧](../systems/asymmetric-multiplayer/objective-pressure.md)
- [無力化・救助・離脱](../systems/asymmetric-multiplayer/elimination-rescue.md)
- [追跡者/敵AIシステム](../systems/horror/s03.md)
- [発見後の逃走と再潜伏](../systems/stealth/detection-recovery.md)

# UXの核

- 追う側と逃げる側の異なる緊張
- 救助と目標進行のリスク判断
- 発見後も続く追跡の駆け引き

# ドメイン要素

- [アクターと役割](../domains/actors.md)
- [空間と移動](../domains/space-and-navigation.md)
- [対立と解決](../domains/conflict-and-resolution.md)
- [目的と成長](../domains/objectives-and-progression.md)
- [対人関係とセッション](../domains/social-and-session.md)
- [音とリズム](../domains/audio-and-rhythm.md)

# 汎用実装とPictor境界

- 知覚、追跡、目標、無力化は権威状態として同期し、恐怖表現はPictorへ分離する。

# Pictor候補

- [シーン描画](../pictor/scene-rendering.md)
- [アニメーション表現](../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../pictor/impact-and-postprocess.md)
- [UI描画](../pictor/ui-rendering.md)

# 根拠

- [Steam Top Sellers](https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1&l=english&cc=us) — 取得時のゲーム順位9位。
- [Dead by Daylight on Steam](https://store.steampowered.com/app/381210/) — 公式説明と製品分類。
