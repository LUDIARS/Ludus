---
type: "Ludus Gameplay System"
title: "陣営別の不完全情報"
description: "可視範囲、痕跡、通信権限を役割ごとに変える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "asymmetric-multiplayer"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:asymmetric-multiplayer:hidden-information"
genre_id: "genre:asymmetric-multiplayer"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

可視範囲、痕跡、通信権限を役割ごとに変える。

# 設計思想

知らないことと説明不足を混同させない。

# 主要機能

- 情報権限
- 痕跡
- 限定通信

# UXへの寄与

- [推理](../../ux/132411ba41da7354.md)
- [緊張](../../ux/a1ffa9bbe49f610d.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [非対称役割と能力](./role-asymmetry.md) の後に実装する。
