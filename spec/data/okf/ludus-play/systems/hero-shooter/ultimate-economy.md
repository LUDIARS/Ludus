---
type: "Ludus Gameplay System"
title: "必殺技ゲージと交戦計画"
description: "強力な能力の蓄積と使用タイミングをチーム戦略へ結び付ける。"
tags:
  - "ludus"
  - "gameplay-system"
  - "hero-shooter"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:hero-shooter:ultimate-economy"
genre_id: "genre:hero-shooter"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

強力な能力の蓄積と使用タイミングをチーム戦略へ結び付ける。

# 設計思想

発動前兆と対処時間を保証する。

# 主要機能

- ゲージ蓄積
- 使用通知
- 持ち越し規則

# UXへの寄与

- [期待感](../../ux/91ca175d56b093ef.md)
- [読み合い](../../ux/4333f56898c1e87e.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [情報とUI](../../domains/information-and-ui.md)
- [対人関係とセッション](../../domains/social-and-session.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [チーム目標戦闘](./objective-combat.md) の後に実装する。
