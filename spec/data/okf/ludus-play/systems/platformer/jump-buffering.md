---
type: "Ludus Gameplay System"
title: "ジャンプバッファリング (Jump Buffering)"
description: "着地前のジャンプ入力を記憶し、着地と同時にジャンプを実行する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:jump-buffering"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

着地前のジャンプ入力を記憶し、着地と同時にジャンプを実行する。

# 設計思想

『プレイヤーは常に少し早めに入力する』という前提に立つ。着地の正確なフレームを見極めるのは困難なため、先行入力を受け付けることで操作感を向上させる。

# 主要機能

- 入力記憶 (着地前10-15フレームのジャンプ入力を保持)
- 即座実行 (着地した瞬間にバッファされたジャンプを発動)
- バッファクリア (着地後一定時間経過で入力を破棄)

# UXへの寄与

- [連続性](../../ux/37f5e16c1ca15ae0.md)
- [リズム感](../../ux/74460e273d5c97b1.md)
- [操作精度](../../ux/8a31c243893e8555.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ジャンプメカニクス](./jump-mechanics.md) の後に実装する。
