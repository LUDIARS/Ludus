---
type: "Ludus Gameplay System"
title: "可視性と騒音"
description: "照明、姿勢、移動速度、素材から露見リスクを決める。"
tags:
  - "ludus"
  - "gameplay-system"
  - "stealth"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:stealth:visibility-noise"
genre_id: "genre:stealth"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

照明、姿勢、移動速度、素材から露見リスクを決める。

# 設計思想

危険度を複数感覚でフィードバックする。

# 主要機能

- 光量評価
- 足音強度
- 遮蔽判定

# UXへの寄与

- [緊張](../../ux/a1ffa9bbe49f610d.md)
- [熟達](../../ux/79dca58dcb75a487.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [知覚モデル](./perception-model.md) の後に実装する。
