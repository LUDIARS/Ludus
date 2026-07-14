---
type: "Ludus Gameplay System"
title: "世界シミュレーション"
description: "人物、時間、天候、勢力の状態変化を扱い、世界がプレイヤー不在でも動く感覚を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "open-world"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:open-world:world-simulation"
genre_id: "genre:open-world"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

人物、時間、天候、勢力の状態変化を扱い、世界がプレイヤー不在でも動く感覚を作る。

# 設計思想

すべてを動かすのでなく、意味のある変化を読み取れるようにする。

# 主要機能

- 日夜・天候
- NPC行動
- 勢力・地域状態

# UXへの寄与

- [生きた世界](../../ux/7215d33766b74717.md)
- [予測と発見](../../ux/bb44ac736f9827d2.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [クエストと物語導線](./quest-narrative.md) の後に実装する。
