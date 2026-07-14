---
type: "Ludus Gameplay System"
title: "スコア表示とリプレイ"
description: "試合状況と決定的なプレーを見やすく示し、成功を共有・振り返りできるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "sports"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:sports:score-replay"
genre_id: "genre:sports"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

試合状況と決定的なプレーを見やすく示し、成功を共有・振り返りできるようにする。

# 設計思想

表示と演出は競技の流れを止めず、意味のある瞬間を強調する。

# 主要機能

- スコアボード
- ハイライト再生
- カメラ演出

# UXへの寄与

- [高揚感](../../ux/4ce3cf3d58819115.md)
- [振り返り](../../ux/6a54b9eecb7483fc.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [情報とUI](../../domains/information-and-ui.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [カメラ表現アダプター](../../pictor/camera-presentation.md)
- [UI描画](../../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)
- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [対戦相手AIと戦術](./opponent-ai.md) の後に実装する。
