---
type: "Ludus Gameplay System"
title: "ステージペーシング"
description: "通常敵、休息、ボス、演出の密度を調整し、短いプレイでも起伏を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "shmup"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:shmup:stage-pacing"
genre_id: "genre:shmup"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

通常敵、休息、ボス、演出の密度を調整し、短いプレイでも起伏を作る。

# 設計思想

密度を上げ続けず、次の挑戦に必要な呼吸を残す。

# 主要機能

- 難度曲線
- 休息区間
- ボスフェーズ

# UXへの寄与

- [達成感](../../ux/0bba7c376aacad35.md)
- [集中の持続](../../ux/b2b7bb6c504c0c75.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)
- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [パワーアップと装備選択](./power-up.md) の後に実装する。
