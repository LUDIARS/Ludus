---
type: "Ludus Gameplay System"
title: "ロックオンシステム"
description: "3D空間での戦闘において、特定の敵に照準を固定し、カメラと攻撃方向を管理する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:lock-on"
genre_id: "genre:action"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

3D空間での戦闘において、特定の敵に照準を固定し、カメラと攻撃方向を管理する。

# 設計思想

『プレイヤーの意図を補助する』システム。完全自動化すると戦略性が失われ、手動のみでは煩雑。ロック中でも移動の自由度を保ち、状況に応じて解除できる柔軟性が重要。

# 主要機能

- ターゲット選択 (視界/範囲内の敵を自動/手動)
- ターゲット切り替え (スティック入力)
- カメラ自動調整 (プレイヤーとターゲットが画面内に収まる)
- 攻撃自動追尾
- 距離管理 (遠すぎ/視界外でロック解除)

# UXへの寄与

- [操作負担軽減](../../ux/53cb3c2487302ac4.md)
- [戦術的選択](../../ux/4bbbbe7c0b9ff918.md)
- [没入感](../../ux/3492fbd7b49fd130.md)

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

# 実装上の前提

- [無敵時間 (Invincibility Frames, i-frames)](./i-frames.md) の後に実装する。
