---
type: "Ludus Gameplay System"
title: "キャラクターコントローラー"
description: "プレイヤーキャラクターの移動・動作を制御し、入力に対して予測可能かつ満足感のある応答を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:character-controller"
genre_id: "genre:action"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

プレイヤーキャラクターの移動・動作を制御し、入力に対して予測可能かつ満足感のある応答を提供する。

# 設計思想

『リアリティ』より『フィール』を優先する。現実の物理に厳密に従うのではなく、プレイヤーが期待する動きを実現する。空中制御や慣性の調整で『気持ちいい』操作感を追求する。

# 主要機能

- 移動制御 (歩行/走行/ジャンプ/回避)
- 状態管理 (地上/空中/壁面/特殊状態の遷移)
- 入力バッファリング
- コヨーテタイム
- ジャンプバッファリング

# UXへの寄与

- [即応性](../../ux/52d11bf91e4eced8.md)
- [寛容性](../../ux/49066749d5fb0ee8.md)
- [予測可能性](../../ux/1bc3880db0ad5a3f.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
