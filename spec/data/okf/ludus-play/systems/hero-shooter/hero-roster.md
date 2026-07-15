---
type: "Ludus Gameplay System"
title: "ヒーロー名簿と役割"
description: "固有キャラクターを役割、難度、得意距離で選択可能にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "hero-shooter"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:hero-shooter:hero-roster"
genre_id: "genre:hero-shooter"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

固有キャラクターを役割、難度、得意距離で選択可能にする。

# 設計思想

外見差とゲーム上の役割差を一致させる。

# 主要機能

- 役割分類
- 選択と交代
- アンロック状態

# UXへの寄与

- [自己表現](../../ux/acdb56909eecad60.md)
- [理解](../../ux/5cb53e3de202ecbb.md)

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

- このジャンル内で先行関係は定義されていない。
