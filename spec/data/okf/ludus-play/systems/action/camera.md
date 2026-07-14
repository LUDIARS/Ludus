---
type: "Ludus Gameplay System"
title: "カメラシステム"
description: "3D空間でのプレイヤーの視点を管理し、戦闘状況の把握と没入感を両立する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:camera"
genre_id: "genre:action"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

3D空間でのプレイヤーの視点を管理し、戦闘状況の把握と没入感を両立する。

# 設計思想

『第三の目』として機能しプレイヤーの意図を先読みする。完全自動では制約が多く、完全手動では負担が大きい。状況に応じた自動調整と、必要時の手動介入のバランスが重要。

# 主要機能

- 追従カメラ (プレイヤーを自動追尾)
- 壁衝突回避 (障害物に埋まらない調整)
- 戦闘時自動調整 (敵との距離/位置でズーム/角度)
- 手動制御 (右スティックでの回転)
- カメラシェイク (衝撃/爆発時の振動演出)

# UXへの寄与

- [状況把握](../../ux/e1169825001588ed.md)
- [没入感](../../ux/3492fbd7b49fd130.md)
- [酔い防止](../../ux/801fc4b66f9f312a.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [カメラ表現アダプター](../../pictor/camera-presentation.md)
- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)
- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [キャラクターコントローラー](./character-controller.md) の後に実装する。
